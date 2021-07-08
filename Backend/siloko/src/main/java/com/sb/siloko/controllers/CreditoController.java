package com.sb.siloko.controllers;

import java.util.List;
import com.sb.siloko.models.dto.CreditoPostDto;
import com.sb.siloko.models.dto.CreditoPutDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
	public Credito addCredito(@RequestBody CreditoPostDto creditoPostDto) {
		return creditoService.saveCredito(creditoPostDto);
	}

	@DeleteMapping("/creditos/delete/{id}")
	public String deleteCredito(@PathVariable Long id) {
		return creditoService.deleteCredito(id);
	}

	@PutMapping("/creditos/update")
	public Credito updateCredito(@RequestBody CreditoPutDto creditoPutDto) {
		return creditoService.updateCredito(creditoPutDto);
	}
}