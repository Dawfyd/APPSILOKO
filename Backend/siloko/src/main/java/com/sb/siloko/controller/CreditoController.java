package com.sb.siloko.controller;

import java.util.List;
import com.sb.siloko.models.dto.CreditoPostDto;
import com.sb.siloko.models.dto.CreditoPutDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import com.sb.siloko.models.entities.Credito;
import com.sb.siloko.service.CreditoService;

@RestController
@RequestMapping
public class CreditoController {

	@Autowired
	CreditoService creditoService;

	@GetMapping("/creditos")
	public List<Credito> getCreditos() {
		return creditoService.findAllCreditos();
	}

	@GetMapping("/creditos/cupo/{cupoId}")
	public List<Credito> getCreditosByCupoId(@PathVariable Long cupoId) {
		return creditoService.findAllCreditosByCupoId(cupoId);
	}

	@GetMapping("/creditos/{id}")
	public Credito getCreditoById(@PathVariable Long id) {
		return creditoService.findCreditoById(id);
	}

	@GetMapping("/creditos/code/{codigoAprobacion}")
	public Credito getCreditoByCodigoAprobacion(@PathVariable String codigoAprobacion) {
		return creditoService.findCreditoByCodigoAprobacion(codigoAprobacion);
	}

	@PostMapping("/creditos/add")
	public Credito addCredito(CreditoPostDto creditoPostDto) {
		return creditoService.saveCredito(creditoPostDto);
	}

	@DeleteMapping("/creditos/delete/{id}")
	public String deleteCredito(@PathVariable Long id) {
		return creditoService.deleteCredito(id);
	}

	@PutMapping("/creditos/update")
	public String updateCredito(CreditoPutDto creditoPutDto) {
		return creditoService.updateCredito(creditoPutDto);
	}
}