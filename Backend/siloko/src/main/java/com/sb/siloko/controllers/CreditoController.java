package com.sb.siloko.controllers;

import java.util.List;
import com.sb.siloko.models.dto.CreditoPostDto;
import com.sb.siloko.models.dto.CreditoPutDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sb.siloko.models.entities.Credito;
import com.sb.siloko.service.CreditoService;

/**
 * Controlador para los creditos
 * @author David Hoyos
 */
@RestController
@RequestMapping
public class CreditoController {

	@Autowired
	CreditoService creditoService;
	/**
	 * Metodo GET para solicitar todos los creditos.
	 * @return Una lista de todos los creditos.
	 */
	@GetMapping("/creditos")
	public List<Credito> getCreditos() {
		return creditoService.findAllCreditos();
	}
	/**
	 * Metodo GET para solicitar creditos por la foranea cupo_id
	 * @return Una lista de todos los creditos que coincidan con la foranea cupo_id enviada.
	 * @param cupoId Es el cupo_id de la foranea de creditos.
	 */
	@GetMapping("/creditos/cupo/{cupoId}")
	public List<Credito> getCreditosByCupoId(@PathVariable Long cupoId) {
		return creditoService.findAllCreditosByCupoId(cupoId);
	}
	/**
	 * Metodo GET para solicitar un credito por su id
	 * @return Un credito que coincida con la id enviada.
	 * @param id Es el id del credito.
	 */
	@GetMapping("/creditos/{id}")
	public Credito getCreditoById(@PathVariable Long id) {
		return creditoService.findCreditoById(id);
	}
	/**
	 * Metodo GET para solicitar un credito por su codigo de aprobacion
	 * @return Un credito que coincida con el codigo de aprovacion enviado.
	 * @param codigoAprobacion Es el codigo de aprobacion del credito.
	 */
	@GetMapping("/creditos/code/{codigoAprobacion}")
	public Credito getCreditoByCodigoAprobacion(@PathVariable String codigoAprobacion) {
		return creditoService.findCreditoByCodigoAprobacion(codigoAprobacion);
	}
	/**
	 * Metodo POST para crear un credito a un cliente
	 * @return el credito creado
	 * @param creditoPostDto contiene los ids de las foraneas de cupo y electrodomestico.
	 */
	@PostMapping("/creditos/add")
	public Credito addCredito(@RequestBody CreditoPostDto creditoPostDto) {
		return creditoService.saveCredito(creditoPostDto);
	}
	/**
	 * Metodo DELETE para eliminar un credito por su id
	 * @return Un string con el mensaje de borrado exitoso o fallido.
	 * @param id Es el id del credito.
	 */
	@DeleteMapping("/creditos/delete/{id}")
	public String deleteCredito(@PathVariable Long id) {
		return creditoService.deleteCredito(id);
	}
	/**
	 * Metodo PUT para actualizar un credito a un cliente
	 * @return el credito actualizado
	 * @param creditoPutDto contiene el id, el estado y el numero de cuotas a actualizar.
	 */
	@PutMapping("/creditos/update")
	public Credito updateCredito(@RequestBody CreditoPutDto creditoPutDto) {
		return creditoService.updateCredito(creditoPutDto);
	}
}