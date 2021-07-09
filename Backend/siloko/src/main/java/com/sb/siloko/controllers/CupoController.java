package com.sb.siloko.controllers;

import java.util.*;

import com.sb.siloko.models.dto.CupoPutDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sb.siloko.models.entities.Cupo;
import com.sb.siloko.models.dto.CupoPostDto;
import com.sb.siloko.service.CupoService;
/**
 * Controlador para los cupos
 * @author David Hoyos
 */
@RestController
@RequestMapping
public class CupoController {

	@Autowired
	CupoService cupoService;
	/**
	 * Metodo GET para solicitar todos los cupos.
	 * @return Una lista de todos los cupos.
	 */
	@GetMapping("/cupos")
	public List<Cupo> getCupos() {
		return cupoService.findAllCupos();
	}
	/**
	 * Metodo GET para solicitar un cupo por su id
	 * @return Un cupo que coincida con la id enviada.
	 * @param id Es el id del cupo.
	 */
	@GetMapping("/cupos/{id}")
	public Cupo getCupoById(@PathVariable Long id) {
		return cupoService.findCupoById(id);
	}
	/**
	 * Metodo POST para crear un cupo a un cliente
	 * @return el cupo creado
	 * @param cupoPostDto contiene el cupo maximo, el estado y la id del cliente al que pertenece.
	 */
	@PostMapping("/cupos/add")
	public Cupo addCupo(@RequestBody CupoPostDto cupoPostDto) {
		return cupoService.saveCupo(cupoPostDto);
	}
	/**
	 * Metodo DELETE para eliminar un cupo por su id
	 * @return Un string con el mensaje de borrado exitoso o fallido.
	 * @param id Es el id del cupo.
	 */
	@DeleteMapping("/cupos/delete/{id}")
	public String deleteCupo(@PathVariable Long id) {
		return cupoService.deleteCupo(id);
	}

	/**
	 * Metodo PUT para actualizar un cupo a un cliente
	 * @return el cupo actualizado
	 * @param cupoPutDto contiene el id, el estado y el cupo maximo a actualizar.
	 */
	@PutMapping("/cupos/update")
	public Cupo updateCupo(@RequestBody CupoPutDto cupoPutDto) {
		return cupoService.updateCupo(cupoPutDto);
	}
	/**
	 * Metodo POST para ejecutar el proceso masivo
	 * @return devuelve el resultado y un mensaje.
	 */
	@PostMapping("/cupos/asignar")
	public ResponseEntity<?> ejecutarProcesoMasivo(){

		Map<String,Object> response = new HashMap<>();

		Boolean resultado = cupoService.callProcesoMasivo(); //Metodo que llama el proceso masivo y retorna true o false
		System.out.println(resultado);
		if(!resultado){
			response.put("resultado",resultado);
			response.put("mensaje","Proceso masivo falló");

			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		response.put("resultado",resultado);
		response.put("mensaje","Proceso masivo realizado correctamente");

		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
