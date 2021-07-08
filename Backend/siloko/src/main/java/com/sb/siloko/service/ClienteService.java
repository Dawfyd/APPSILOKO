package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.Cliente;
import org.springframework.stereotype.Service;

/**
 * Servicio para los clientes
 * @author david
 */
@Service
public interface ClienteService {
    /**
     * Metodo para pedir todos los clientes.
     * @return Una lista de todos los clientes.
     */
    public List<Cliente> findAllClientes();
	public  List<Cliente> findClienteByCedulaCiudadania(String cedulaCiudadania);

}