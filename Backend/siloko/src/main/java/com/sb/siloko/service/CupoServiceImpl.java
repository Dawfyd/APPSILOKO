package com.sb.siloko.service;

import java.util.List;

import com.sb.siloko.models.dto.CupoPutDto;
import com.sb.siloko.models.entities.Cliente;
import com.sb.siloko.models.entities.Credito;
import com.sb.siloko.service.dao.ProcesoMasivoDAO;
import com.sb.siloko.service.repository.ClienteRepository;
import com.sb.siloko.service.repository.CreditoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.sb.siloko.models.entities.Cupo;
import com.sb.siloko.models.dto.CupoPostDto;
import com.sb.siloko.service.repository.CupoRepository;
/**
 * Componente que implementa el servicio de cupos
 * @author David Hoyos
 */
@Component
public class CupoServiceImpl implements CupoService {

	@Autowired
	CupoRepository cupoRepository;

	@Autowired
	ClienteRepository clienteRepository;

	@Autowired
	CreditoRepository creditoRepository;

	@Autowired
	ProcesoMasivoDAO procesoMasivoDAO;

	@Override
	public List<Cupo> findAllCupos() {
		return cupoRepository.findAll();
	}

	@Override
	public Cupo findCupoById(Long id) {
		return cupoRepository.findById(id).orElse(null);
	}

	@Override
	public Cupo saveCupo(CupoPostDto cupoPostDto) {
		Long clienteId = cupoPostDto.getClienteId();
		if (clienteRepository.findById(clienteId).isPresent()) {
			Cliente clienteUpdate = clienteRepository.getOne(clienteId);
			Cupo cupoNew = new Cupo();
			cupoNew.setCupoMaximo(cupoPostDto.getCupoMaximo());
			cupoNew.setEstadoCupo(cupoPostDto.getEstadoCupo());
			cupoNew.setCupoDisponible(cupoPostDto.getCupoMaximo());
			cupoNew = cupoRepository.save(cupoNew);
			clienteUpdate.setCupo(cupoNew);
			clienteRepository.save(clienteUpdate);
			return cupoNew;
		}
		return null;
	}

	@Override
	public String deleteCupo(Long id) {
		if (cupoRepository.findById(id).isPresent()) {
			Cliente clienteUpdate = clienteRepository.findClienteByCupoId(id);
			clienteUpdate.setCupo(null);
			clienteRepository.save(clienteUpdate);
			cupoRepository.deleteById(id);
			return "Cupo eliminado correctamente.";
		}
		return "Error! El cupo no existe";
	}

	@Override
	public Cupo updateCupo(CupoPutDto cupoPutDto) {
		Long cupoId = cupoPutDto.getId();
		if (cupoRepository.findById(cupoId).isPresent()) {
			Cupo cupoToUpdate = cupoRepository.getOne(cupoId);
			cupoToUpdate.setCupoMaximo(cupoPutDto.getCupoMaximo());
			cupoToUpdate.setEstadoCupo(cupoPutDto.getEstadoCupo());
			List<Credito> creditosArray = creditoRepository.findByCupoId(cupoId);
			int totalSaldosPendientes =0;
			for (Credito credito : creditosArray) {
				totalSaldosPendientes += credito.getSaldoPendiente();
			}
			cupoToUpdate.setCupoDisponible(cupoPutDto.getCupoMaximo()-totalSaldosPendientes);
			cupoRepository.save(cupoToUpdate);
			return cupoToUpdate;
		}
		return null;
	}
	@Override
	public Boolean callProcesoMasivo() {
		return procesoMasivoDAO.executeProcesoMasivo();
	}
}