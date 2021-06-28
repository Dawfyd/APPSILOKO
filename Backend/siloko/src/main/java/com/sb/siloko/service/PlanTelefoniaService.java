package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.PlanTelefonia;

public interface PlanTelefoniaService {
    public List<PlanTelefonia> findAllPlanesTelefonia();
	public List<PlanTelefonia> findPlanesTelefoniaByClienteId(Long clienteId);
}