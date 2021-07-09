package com.sb.siloko.service.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;
import java.sql.Types;
import java.util.Map;
/**
 * Implementacion del DAO para ejecutar el proceso masivo
 * @author David Hoyos
 */
@Repository
public class ProcesoMasivoDAOImpl implements ProcesoMasivoDAO {

    private final JdbcTemplate jdbcTemplate;

    private static final String PAQUETE = "PROCESO_MASIVO";
    private static final String PROCEDURE_ASIGNAR_CUPOS = "ORQUESTADOR_CUPO";

    @Autowired
    public ProcesoMasivoDAOImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public  Boolean executeProcesoMasivo()  {
        boolean estado_proceso_masivo;
        var simpleJdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName(PAQUETE)
                .withProcedureName(PROCEDURE_ASIGNAR_CUPOS)
                .declareParameters(
                        new SqlOutParameter("OP_RESULTADO", Types.INTEGER));
               Map<String, Object> out = simpleJdbcCall.execute();
               Integer op_resultado = (Integer) out.get("OP_RESULTADO");
               estado_proceso_masivo = op_resultado == 0;
               return estado_proceso_masivo;
    }
}
