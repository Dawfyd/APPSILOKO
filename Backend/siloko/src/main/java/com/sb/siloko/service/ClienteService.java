package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.Cliente;
import org.springframework.stereotype.Service;

/**
 * Servicio para los clientes
 * @author David Hoyos
 */
@Service
public interface ClienteService {
    /**
     * Metodo para solicitar todos los clientes.
     * @return Una lista de todos los clientes.
     */
    public List<Cliente> findAllClientes();
    /**
     * Metodo para solicitar clientes por cedula de ciudadania
     * @return Una lista de todos los clienten que coincidan con la cedula de ciudadania enviada.
     * @param cedulaCiudadania Es el numero de cedula de el cliente.
     */
	public  List<Cliente> findClienteByCedulaCiudadania(String cedulaCiudadania);

}