package com.sb.siloko.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.sb.siloko.models.entities.Cliente;
import com.sb.siloko.service.repository.ClienteRepository;

@Component
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	ClienteRepository clienteRepository;

	@Override
	public List<Cliente> findAllClientes() {
		return clienteRepository.findAll();
	}

	@Override
	public  List<Cliente> findClienteByCedulaCiudadania(String cedulaCiudadania) {
		return clienteRepository.findByCedulaCiudadania(cedulaCiudadania);
	}
}