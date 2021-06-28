package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.Cliente;
import org.springframework.stereotype.Service;

@Service
public interface ClienteService {

    public List<Cliente> findAllClientes();
	public  List<Cliente> findClienteByCedulaCiudadania(String cedulaCiudadania);

}