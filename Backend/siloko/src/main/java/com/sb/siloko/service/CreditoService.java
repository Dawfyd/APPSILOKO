package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.Credito;
import com.sb.siloko.models.dto.CreditoPostDto;
import com.sb.siloko.models.dto.CreditoPutDto;
import org.springframework.stereotype.Service;

@Service
public interface CreditoService {

    public List<Credito> findAllCreditos();

	public List<Credito> findAllCreditosByCupoId(Long cupoId);

	public Credito findCreditoById(Long id);

	public Credito findCreditoByCodigoAprobacion(String codigoAprobacion);

	public Credito saveCredito(CreditoPostDto creditoPostDto);

	public String deleteCredito(Long id);

	public String updateCredito(CreditoPutDto creditoPutDto);
}
