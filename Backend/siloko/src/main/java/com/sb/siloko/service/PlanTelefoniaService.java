package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.PlanTelefonia;
import org.springframework.stereotype.Service;

/**
 * Servicio para los planes de telefonia
 * @author David Hoyos
 */
@Service
public interface PlanTelefoniaService {
    /**
     * Metodo para solicitar todos los planes de telefonia.
     * @return Una lista de todos los planes de telefonia.
     */
    public List<PlanTelefonia> findAllPlanesTelefonia();
    /**
     * Metodo para solicitar todos planes de telefonia por su foreanea cliente_id
     * @return Una lista de todos los planes de telefonia pertenecientes a la id del cliente enviada.
     * @param clienteId Es el id del cliente
     */
	public List<PlanTelefonia> findPlanesTelefoniaByClienteId(Long clienteId);
}