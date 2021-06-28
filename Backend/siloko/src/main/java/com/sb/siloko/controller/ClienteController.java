package com.sb.siloko.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.sb.siloko.models.entities.Cliente;
import com.sb.siloko.service.ClienteService;

@RestController
@RequestMapping
public class ClienteController {

  @Autowired
  ClienteService clienteService;

  @GetMapping("/clientes")
  public List<Cliente> getClientes() {
    return clienteService.findAllClientes();
  }

  @GetMapping("/clientes/{cedulaCiudadania}")
  public  List<Cliente> getClienteByCedulaCiudadania (@PathVariable String cedulaCiudadania) {
    return clienteService.findClienteByCedulaCiudadania(cedulaCiudadania);

  }
}