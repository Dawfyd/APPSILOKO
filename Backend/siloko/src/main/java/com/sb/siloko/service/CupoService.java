package com.sb.siloko.service;

import java.util.List;

import com.sb.siloko.models.dto.CupoPutDto;
import com.sb.siloko.models.entities.Cupo;
import com.sb.siloko.models.dto.CupoPostDto;
import org.springframework.stereotype.Service;
/**
 * Servicio para los cupos
 * @author David Hoyos
 */
@Service
public interface CupoService {
	/**
	 * Metodo para solicitar todos los cupos.
	 * @return Una lista de todos los cupos.
	 */
    public List<Cupo> findAllCupos();
	/**
	 * Metodo para solicitar un cupo por su id
	 * @return Un cupo que coincida con la id enviada.
	 * @param id Es el id del cupo.
	 */
	public Cupo findCupoById(Long id);
	/**
	 * Metodo para crear un cupo a un cliente
	 * @return el cupo creado
	 * @param cupoPostDto contiene el cupo maximo, el estado y la id del cliente al que pertenece.
	 */
	public Cupo saveCupo(CupoPostDto cupoPostDto);
	/**
	 * Metodo para eliminar un cupo por su id
	 * @return Un string con el mensaje de borrado exitoso o fallido.
	 * @param id Es el id del cupo.
	 */
	public String deleteCupo(Long id);
	/**
	 * Metodo para actualizar un cupo a un cliente
	 * @return el cupo actualizado
	 * @param cupoPutDto contiene el id, el estado y el cupo maximo a actualizar.
	 */
	public Cupo updateCupo(CupoPutDto cupoPutDto);
	/**
	 * Metodo para ejecutar el proceso masivo
	 * @return devuelve true si el proceso masivo se ejecuto satisfactoriamente, si fallo devuelve false.
	 */
	public Boolean callProcesoMasivo();
}