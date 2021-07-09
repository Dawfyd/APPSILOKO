package com.sb.siloko.service;

import java.util.Date;
import java.util.List;
import java.util.Random;
import com.sb.siloko.models.entities.Cupo;
import com.sb.siloko.models.entities.Electrodomestico;
import com.sb.siloko.models.entities.PlanTelefonia;
import com.sb.siloko.models.dto.CreditoPostDto;
import com.sb.siloko.models.dto.CreditoPutDto;
import com.sb.siloko.service.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.sb.siloko.models.entities.Credito;
import org.springframework.stereotype.Component;

/**
 * Componente que implementa el servicio de creditos
 * @author David Hoyos
 */
@Component
public class CreditoServiceImpl implements CreditoService {

	@Autowired
	CreditoRepository creditoRepository;

	@Autowired
	CupoRepository cupoRepository;

	@Autowired
	ElectrodomesticoRepository electrodomesticoRepository;

	@Autowired
	ClienteRepository clienteRepository;

	@Autowired
	PlanTelefoniaRepository planTelefoniaRepository;

	@Override
	public List<Credito> findAllCreditos() {
		return creditoRepository.findAll();
	}

	@Override
	public List<Credito> findAllCreditosByCupoId(Long cupoId) {
		return creditoRepository.findByCupoId(cupoId);
	}

	@Override
	public Credito findCreditoById(Long id) {
		return creditoRepository.getOne(id);
	}

	@Override
	public Credito findCreditoByCodigoAprobacion(String codigoAprobacion) {
		return creditoRepository.findByCodigoAprobacion(codigoAprobacion);
	}

	@Override
	public Credito saveCredito(CreditoPostDto creditoPostDto) {
		Long cupoId = creditoPostDto.getCupoId();
		Long electrodomesticoId = creditoPostDto.getElectrodomesticoId();
		// Se comprueba que el cupo y el electrodomestico existe.
		if (cupoRepository.findById(cupoId).isPresent() && electrodomesticoRepository.findById(electrodomesticoId).isPresent())  {
			Cupo cupoUpdate =  cupoRepository.getOne(cupoId);
			Electrodomestico electrodomestico = electrodomesticoRepository.getOne(electrodomesticoId);
			Credito creditoNew = new Credito();
			creditoNew.setElectrodomestico(electrodomestico);
			creditoNew.setFechaCreacion(new Date());
			creditoNew.setNumeroCuotas(0);
			Long clienteId = clienteRepository.findClienteByCupoId(cupoId).getId();
			List<PlanTelefonia> planesArray = planTelefoniaRepository.findByClienteId(clienteId);
			String numCedula = clienteRepository.findClienteByCupoId(cupoId).getCedulaCiudadania();
			// CodigoAprobacion es: Ultimos 4 digitos de la cedula + 4 digitos aleatorios.
			String ultimosDigitos = numCedula.substring(numCedula.length() - 4);
			Random codeRandom = new Random();
			boolean estadoPlanes = false;
			for (PlanTelefonia planTelefonia : planesArray) {
				if (planTelefonia.getEstado()) {
					estadoPlanes = true;
					break;
				}
			}
			//Se comprueba si el cliente tiene un plan de telefonia activo.
			if (estadoPlanes) {
				//Se comprueba si el cupo del cliente esta activo.
				if (cupoUpdate.getEstadoCupo()){
					//Se comprueba que el cliente tiene cupo disponible para la solicitud.
					if (cupoUpdate.getCupoDisponible() >= electrodomestico.getPrecio()) {
						creditoNew.setEstado("Aprobado");
						creditoNew.setCausal("Aprobado");
						creditoNew.setSaldoPendiente(electrodomestico.getPrecio());
						String newCodigoAprobacion;
						do {
							newCodigoAprobacion = (ultimosDigitos+codeRandom.nextInt(10000));
						}
						// Se comprueba que el codigo de aprobacion generado no existe.
						while(creditoRepository.findByCodigoAprobacion(newCodigoAprobacion) != null);
						creditoNew.setCodigoAprobacion(newCodigoAprobacion);
						// Se modifica el cupo disponible, restandole el valor del electrodomestico.
						cupoUpdate.setCupoDisponible(cupoUpdate.getCupoDisponible()- electrodomestico.getPrecio());
						cupoRepository.save(cupoUpdate);
					}else {
						creditoNew.setEstado("Rechazado");
						creditoNew.setCausal("Exceso de Cupo");
						creditoNew.setCodigoAprobacion("Rechazado");
						creditoNew.setSaldoPendiente(0);
					}
				}else {
					creditoNew.setEstado("Rechazado");
					creditoNew.setCausal("Bloqueo de Cupo");
					creditoNew.setCodigoAprobacion("Rechazado");
					creditoNew.setSaldoPendiente(0);
				}
			}else {
				creditoNew.setEstado("Rechazado");
				creditoNew.setCausal("sin Producto Activo");
				creditoNew.setCodigoAprobacion("Rechazado");
				creditoNew.setSaldoPendiente(0);
			}
			creditoNew.setCupo(cupoUpdate);
			return creditoRepository.save(creditoNew);
		}
		return null;
	}
	@Override
	public String deleteCredito(Long id) {
		if (creditoRepository.findById(id).isPresent()) {
			creditoRepository.deleteById(id);
			return "Credito eliminado correctamente.";
		}
		return "Error! El credito no existe";
	}

	@Override
	public Credito updateCredito(CreditoPutDto creditoPutDto) {
		Long creditoId = creditoPutDto.getId();
		if (creditoRepository.findById(creditoId).isPresent()) {
			Credito creditoUpdate = creditoRepository.getOne(creditoId);
			creditoUpdate.setEstado(creditoPutDto.getEstado());
			creditoUpdate.setNumeroCuotas(creditoPutDto.getNumeroCuotas());
			creditoUpdate.setFechaModificacion(new Date());
			creditoRepository.save(creditoUpdate);
			return creditoUpdate;
		}
		return null;
	}
}