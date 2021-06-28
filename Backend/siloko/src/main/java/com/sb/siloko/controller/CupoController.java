package com.sb.siloko.controller;

import java.util.*;

import com.sb.siloko.models.dto.CupoPutDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import com.sb.siloko.models.entities.Cupo;
import com.sb.siloko.models.dto.CupoPostDto;
import com.sb.siloko.service.CupoService;

@RestController
@RequestMapping
public class CupoController {

	@Autowired
	CupoService cupoService;

	@GetMapping("/cupos")
	public List<Cupo> getCupos() {
		return cupoService.findAllCupos();
	}

	@GetMapping("/cupos/{id}")
	public Cupo getCupoById(@PathVariable Long id) {
		return cupoService.findCupoById(id);
	}

	@PostMapping("/cupos/add")
	public Cupo addCupo(CupoPostDto cupoPostDto) {
		return cupoService.saveCupo(cupoPostDto);
	}

	@DeleteMapping("/cupos/delete/{id}")
	public String deleteCupo(@PathVariable Long id) {
		return cupoService.deleteCupo(id);
	}

	@PutMapping("/cupos/update")
	public String updateCupo(CupoPutDto cupoPutDto) {
		return cupoService.updateCupo(cupoPutDto);
	}

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
