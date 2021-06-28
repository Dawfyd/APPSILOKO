CREATE OR REPLACE PACKAGE proceso_masivo IS
    PROCEDURE orquestador_cupo (
        op_resultado OUT NUMBER
    );

    PROCEDURE actualizar_cupo (
        ip_cupo_id IN NUMBER
    );

    PROCEDURE puntaje_antiguedad (
        ip_cliente_id          IN   NUMBER,
        op_puntaje_antiguedad  OUT  NUMBER
    );

    PROCEDURE puntaje_ciudad (
        ip_cliente_id      IN   NUMBER,
        op_puntaje_ciudad  OUT  NUMBER
    );

    PROCEDURE puntaje_estrato (
        ip_cliente_id       IN   NUMBER,
        op_puntaje_estrato  OUT  NUMBER
    );

    PROCEDURE puntaje_planes_telefonia (
        ip_cliente_id                IN   NUMBER,
        op_puntaje_planes_telefonia  OUT  NUMBER
    );

    FUNCTION antiguedad_anios (
        ip_cliente_id IN NUMBER
    ) RETURN NUMBER;

END proceso_masivo;
/

CREATE OR REPLACE PACKAGE BODY proceso_masivo IS
 --Procedimiento que calcula cupo segun el puntaje total
    PROCEDURE orquestador_cupo (
        op_resultado OUT NUMBER
    ) IS

        puntaje_cliente_antiguedad        NUMBER;
        puntaje_cliente_ciudad            NUMBER;
        puntaje_cliente_estrato           NUMBER;
        puntaje_cliente_planes_telefonia  NUMBER;
        puntaje_total_cliente             NUMBER;
        cliente_id                        NUMBER;
        cliente_id_cupo                   NUMBER;
        nuevo_id_cupo                     cupo.id%TYPE := 0;
        CURSOR c_cliente IS
        SELECT
            id,
            cupo_id
        FROM
            cliente;

    BEGIN
        OPEN c_cliente;
        LOOP
            FETCH c_cliente INTO
                cliente_id,
                cliente_id_cupo;
            EXIT WHEN c_cliente%notfound;
            proceso_masivo.puntaje_antiguedad(cliente_id, puntaje_cliente_antiguedad);
            proceso_masivo.puntaje_ciudad(cliente_id, puntaje_cliente_ciudad);
            proceso_masivo.puntaje_estrato(cliente_id, puntaje_cliente_estrato);
            proceso_masivo.puntaje_planes_telefonia(cliente_id, puntaje_cliente_planes_telefonia);
            puntaje_total_cliente := puntaje_cliente_antiguedad + puntaje_cliente_ciudad + puntaje_cliente_estrato + puntaje_cliente_planes_telefonia;

            puntaje_total_cliente := puntaje_total_cliente * 200000;
            IF ( cliente_id_cupo IS NULL ) THEN
                INSERT INTO cupo (
                    cupo_maximo,
                    estado_cupo,
                    cupo_disponible
                ) VALUES (
                    puntaje_total_cliente,
                    1,
                    puntaje_total_cliente
                ) RETURNING id INTO nuevo_id_cupo;

                UPDATE cliente
                SET
                    cupo_id = nuevo_id_cupo
                WHERE
                    id = cliente_id;

            ELSE
                UPDATE cupo
                SET
                    cupo_maximo = puntaje_total_cliente
                WHERE
                    id = cliente_id_cupo;

                proceso_masivo.actualizar_cupo(cliente_id_cupo);

            END IF;

        END LOOP;



            CLOSE c_cliente;
                    op_resultado := 0;
    EXCEPTION
        WHEN OTHERS THEN
            op_resultado := 1;
    END orquestador_cupo;

    PROCEDURE actualizar_cupo (
        ip_cupo_id IN NUMBER
    ) IS

        credito_id               NUMBER;
        credito_saldo_pendiente  NUMBER;
        credito_estado           NVARCHAR2(30);
        credito_saldo_total      NUMBER := 0;
        saldo_pendiente_total    NUMBER := 0;
        cupo_maximo_cliente      NUMBER := 0;
        nuevo_cupo_disponible    NUMBER := 0;
        CURSOR c_credito IS
        SELECT
            id,
            saldo_pendiente,
            estado
        FROM
            credito
        WHERE
            cupo_id = ip_cupo_id;

    BEGIN
        OPEN c_credito;
        LOOP
            FETCH c_credito INTO
                credito_id,
                credito_saldo_pendiente,
                credito_estado;
            EXIT WHEN c_credito%notfound;
            credito_estado := trim(credito_estado);
            credito_estado := upper(credito_estado);
            IF ( credito_estado = 'ACTIVO' OR credito_estado = 'APROBADO' ) THEN
                credito_saldo_total := credito_saldo_pendiente;
            ELSE
                credito_saldo_total := 0;
            END IF;

            saldo_pendiente_total := credito_saldo_total + saldo_pendiente_total;

        END LOOP;

        SELECT
            cupo_maximo
        INTO cupo_maximo_cliente
        FROM
            cupo
        WHERE
            id = ip_cupo_id;

        nuevo_cupo_disponible := cupo_maximo_cliente - saldo_pendiente_total;
        UPDATE cupo
        SET
            cupo_disponible = nuevo_cupo_disponible
        WHERE
            id = ip_cupo_id;

        CLOSE c_credito;
    END actualizar_cupo;

    --Procedimiento que calcula el puntaje de un cliente dependiendo de su antiguedad en la empresa
    PROCEDURE puntaje_antiguedad (
        ip_cliente_id          IN   NUMBER,
        op_puntaje_antiguedad  OUT  NUMBER
    ) IS
        antiguedad_anios_cliente NUMBER;
    BEGIN
        antiguedad_anios_cliente := antiguedad_anios(ip_cliente_id);
        CASE
            WHEN antiguedad_anios_cliente BETWEEN 0 AND 1 THEN
                op_puntaje_antiguedad := 1;
            WHEN antiguedad_anios_cliente BETWEEN 2 AND 4 THEN
                op_puntaje_antiguedad := 3;
            ELSE
                op_puntaje_antiguedad := 5;
        END CASE;

    END puntaje_antiguedad;

    --Procedimiento que calcula el puntaje de un cliente dependiendo de su ciudad
    PROCEDURE puntaje_ciudad (
        ip_cliente_id      IN   NUMBER,
        op_puntaje_ciudad  OUT  NUMBER
    ) IS
        ciudad_cliente NVARCHAR2(30);
    BEGIN
        SELECT
            ciudad
        INTO ciudad_cliente
        FROM
            cliente
        WHERE
            id = ip_cliente_id;

        ciudad_cliente := trim(ciudad_cliente);
        ciudad_cliente := upper(ciudad_cliente);
        CASE
            WHEN ciudad_cliente = 'BOGOTA' OR ciudad_cliente = 'MEDELLIN' THEN
                op_puntaje_ciudad := 4;
            WHEN ciudad_cliente = 'CALI' OR ciudad_cliente = 'BARRANQUILLA' THEN
                op_puntaje_ciudad := 3;
            WHEN ciudad_cliente = 'CARTAGENA' OR ciudad_cliente = 'CUCUTA' THEN
                op_puntaje_ciudad := 2;
            ELSE
                op_puntaje_ciudad := 1;
        END CASE;

    END puntaje_ciudad;

    --Procedimiento que calcula el puntaje de un cliente dependiendo de su estrato
    PROCEDURE puntaje_estrato (
        ip_cliente_id       IN   NUMBER,
        op_puntaje_estrato  OUT  NUMBER
    ) IS
        estrato_cliente NUMBER;
    BEGIN
        SELECT
            estrato
        INTO estrato_cliente
        FROM
            cliente
        WHERE
            id = ip_cliente_id;

        CASE
            WHEN estrato_cliente BETWEEN 1 AND 2 THEN
                op_puntaje_estrato := 1;
            WHEN estrato_cliente BETWEEN 3 AND 4 THEN
                op_puntaje_estrato := 3;
            ELSE
                op_puntaje_estrato := 6;
        END CASE;

    END puntaje_estrato;
    --Procedimiento que calcula el puntaje de un cliente con sus planes de telefonia
    PROCEDURE puntaje_planes_telefonia (
        ip_cliente_id                IN   NUMBER,
        op_puntaje_planes_telefonia  OUT  NUMBER
    ) IS
        puntaje_plan_cliente  NUMBER;
        tipo_plan_cliente     NVARCHAR2(30);
    BEGIN
        op_puntaje_planes_telefonia := 0;
        FOR plan_telefonia IN (
            SELECT
                *
            FROM
                plan_telefonia
            WHERE
                cliente_id = ip_cliente_id
        ) LOOP
            IF ( plan_telefonia.estado = 1 ) THEN
                tipo_plan_cliente := plan_telefonia.nombre;
                tipo_plan_cliente := trim(tipo_plan_cliente);
                tipo_plan_cliente := upper(tipo_plan_cliente);
                CASE
                    WHEN tipo_plan_cliente = 'BASIC' THEN
                        puntaje_plan_cliente := 1;
                    WHEN tipo_plan_cliente = 'VACANO' THEN
                        puntaje_plan_cliente := 2;
                    WHEN tipo_plan_cliente = 'NINJA' THEN
                        puntaje_plan_cliente := 4;
                    ELSE
                        puntaje_plan_cliente := 0;
                END CASE;

            ELSE
                puntaje_plan_cliente := 0;
            END IF;

            op_puntaje_planes_telefonia := puntaje_plan_cliente + op_puntaje_planes_telefonia;
        END LOOP;

    END puntaje_planes_telefonia;

    FUNCTION antiguedad_anios (
        ip_cliente_id IN NUMBER
    ) RETURN NUMBER IS
        anios_plantelefonia  NUMBER := 0;
        anios_cliente        NUMBER := 0;
    BEGIN
        FOR fila IN (
            SELECT
                *
            FROM
                plan_telefonia
            WHERE
                cliente_id = ip_cliente_id
        ) LOOP
            IF ( fila.estado = 1 ) THEN
                anios_plantelefonia := trunc((to_number(to_char(sysdate, 'yyyymmdd')) - to_number(to_char(fila.f_creacion, 'yyyymmdd'))) /
                10000);
            ELSE
                anios_plantelefonia := trunc((to_number(to_char(fila.f_modificacion, 'yyyymmdd')) - to_number(to_char(fila.f_creacion,
                'yyyymmdd'))) / 10000);
            END IF;

            anios_cliente := anios_plantelefonia + anios_cliente;
        END LOOP;

        RETURN anios_cliente;
    EXCEPTION
        WHEN OTHERS THEN
            anios_cliente := 0;
            RETURN anios_cliente;
    END;

END proceso_masivo;