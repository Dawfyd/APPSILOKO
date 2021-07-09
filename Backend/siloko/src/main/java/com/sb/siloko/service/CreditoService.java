package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.Credito;
import com.sb.siloko.models.dto.CreditoPostDto;
import com.sb.siloko.models.dto.CreditoPutDto;
import org.springframework.stereotype.Service;

/**
 * Servicio para los creditos
 * @author David Hoyos
 */
@Service
public interface CreditoService {
	/**
	 * Metodo para solicitar todos los creditos.
	 * @return Una lista de todos los creditos.
	 */
    public List<Credito> findAllCreditos();
	/**
	 * Metodo para solicitar creditos por la foranea cupo_id
	 * @return Una lista de todos los creditos que coincidan con la foranea cupo_id enviada.
	 * @param cupoId Es el cupo_id de la foranea de creditos.
	 */
	public List<Credito> findAllCreditosByCupoId(Long cupoId);
	/**
	 * Metodo para solicitar un credito por su id
	 * @return Un credito que coincida con la id enviada.
	 * @param id Es el id del credito.
	 */
	public Credito findCreditoById(Long id);
	/**
	 * Metodo para solicitar un credito por su codigo de aprobacion
	 * @return Un credito que coincida con el codigo de aprovacion enviado.
	 * @param codigoAprobacion Es el codigo de aprobacion del credito.
	 */
	public Credito findCreditoByCodigoAprobacion(String codigoAprobacion);
	/**
	 * Metodo para crear un credito a un cliente
	 * @return el credito creado
	 * @param creditoPostDto contiene los ids de las foraneas de cupo y electrodomestico.
	 */
	public Credito saveCredito(CreditoPostDto creditoPostDto);
	/**
	 * Metodo para eliminar un credito por su id
	 * @return Un string con el mensaje de borrado exitoso o fallido.
	 * @param id Es el id del credito.
	 */
	public String deleteCredito(Long id);
	/**
	 * Metodo para actualizar un credito a un cliente
	 * @return el credito actualizado
	 * @param creditoPutDto contiene el id, el estado y el numero de cuotas a actualizar.
	 */
	public Credito updateCredito(CreditoPutDto creditoPutDto);
}
