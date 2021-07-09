package com.sb.siloko.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.sb.siloko.models.entities.Cliente;
import com.sb.siloko.service.ClienteService;
/**
 * Controlador para los clientes
 * @author David Hoyos
 */
@RestController
@RequestMapping
public class ClienteController {

  @Autowired
  ClienteService clienteService;
  /**
   * Metodo GET para solicitar todos los clientes.
   * @return Una lista de todos los clientes.
   */
  @GetMapping("/clientes")
  public List<Cliente> getClientes() {
    return clienteService.findAllClientes();
  }
  /**
   * Metodo GET para solicitar clientes por cedula de ciudadania
   * @return Una lista de todos los clienten que coincidan con la cedula de ciudadania enviada.
   * @param cedulaCiudadania Es el numero de cedula de el cliente.
   */
  @GetMapping("/clientes/{cedulaCiudadania}")
  public  List<Cliente> getClienteByCedulaCiudadania (@PathVariable String cedulaCiudadania) {
    return clienteService.findClienteByCedulaCiudadania(cedulaCiudadania);

  }
}