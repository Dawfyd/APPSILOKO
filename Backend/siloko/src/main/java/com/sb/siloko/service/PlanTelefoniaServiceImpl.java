package com.sb.siloko.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.sb.siloko.models.entities.PlanTelefonia;
import com.sb.siloko.service.repository.PlanTelefoniaRepository;

@Component
public class PlanTelefoniaServiceImpl implements PlanTelefoniaService {

	@Autowired
	PlanTelefoniaRepository planTelefoniaRepository;

	@Override
	public List<PlanTelefonia> findAllPlanesTelefonia() {
		return planTelefoniaRepository.findAll();
	}

	@Override
	public  List<PlanTelefonia> findPlanesTelefoniaByClienteId(Long clienteId) {
		return planTelefoniaRepository.findByClienteId(clienteId);
	}
}