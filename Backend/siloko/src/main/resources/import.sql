INSERT INTO  "CUPO" (CUPO_MAXIMO, ESTADO_CUPO, CUPO_DISPONIBLE) values (3000000, 1,2000000);
INSERT INTO  "CUPO" (CUPO_MAXIMO, ESTADO_CUPO, CUPO_DISPONIBLE) values (3000000, 0,2000000);
INSERT INTO  "CUPO" (CUPO_MAXIMO, ESTADO_CUPO, CUPO_DISPONIBLE) values (2000000, 1,2000000);
INSERT INTO  "CUPO" (CUPO_MAXIMO, ESTADO_CUPO, CUPO_DISPONIBLE) values (2000000, 0,2000000);
INSERT INTO  "CUPO" (CUPO_MAXIMO, ESTADO_CUPO, CUPO_DISPONIBLE) values (3000000, 1,2000000);
INSERT INTO  "CUPO" (CUPO_MAXIMO, ESTADO_CUPO, CUPO_DISPONIBLE) values (2000000, 1,2000000);


INSERT INTO  "ELECTRODOMESTICO" (CODIGO_ARTICULO, DESCRIPCION, ESTADO, NOMBRE, PRECIO) values ('123456789', 'Nevera Top Freezer 410L con DoorCooling', 1, 'Nevera', 1500000);

INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO, CUPO_ID) values ('1143870901', 'Nikola', 'Tesla', 'Colombia', 'Bogota', 3, 1);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO, CUPO_ID) values ('1143870902', 'Michael', 'Faraday', 'Colombia', 'Medellin', 6, 2);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO, CUPO_ID) values ('1143870903', 'Isaac', 'Newton', 'Colombia', 'Cali', 1, 3);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO, CUPO_ID) values ('1143870904', 'Elon', 'Musk', 'Colombia', 'Barranquilla', 2, 4);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO, CUPO_ID) values ('1143870905', 'Tony', 'Stark', 'Colombia', 'Cartagena', 5, 5);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO, CUPO_ID) values ('1143870906', 'Arya', 'Stark', 'Colombia', 'Cucuta', 1, 6);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO) values ('1143870907', 'Robb', 'Stark', 'Colombia', 'Bucaramanga', 4);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO) values ('1143870908', 'Bran', 'Stark', 'Colombia', 'Villavicencio', 5);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO) values ('1143870907', 'Robb', 'Stark', 'Colombia', 'Bucaramanga', 2);
INSERT INTO  "CLIENTE" (CEDULA_CIUDADANIA, NOMBRE, APELLIDO, PAIS, CIUDAD, ESTRATO) values ('1143870908', 'Bran', 'Stark', 'Colombia', 'Villavicencio', 3);

INSERT INTO  "CREDITO" (SALDO_PENDIENTE, CODIGO_APROBACION, ESTADO, CAUSAL, NUMERO_CUOTAS,CUPO_ID, ELECTRODOMESTICO_ID, F_CREACION, F_MODIFICACION) values (300000,'111111', 'Activo', 'melo' ,0, 1, 1, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2018-03-06', 'yyyy-mm-dd'));

INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163163371', 'Vacano', '500', 1, 1, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163164442', 'Basic', '100', 0, 2, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163163373', 'Ninja', '500', 1, 3, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163164444', 'Vacano', '100', 0, 4, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163163375', 'Vacano', '500', 1, 5, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163164446', 'Vacano', '100', 0, 6, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163163377', 'Vacano', '500', 1, 7, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163164448', 'Vacano', '100', 0, 8, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163163379', 'Basic', '500', 1, 1, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));
INSERT INTO  "PLAN_TELEFONIA" (NUMERO_CELULAR, NOMBRE, MINUTOS, ESTADO, CLIENTE_ID, F_CREACION, F_MODIFICACION) values ('3163164410', 'Ninja', '100', 0, 1, TO_DATE('2018-03-06', 'yyyy-mm-dd'),TO_DATE('2019-03-06', 'yyyy-mm-dd'));