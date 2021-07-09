package com.sb.siloko.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.sb.siloko.models.entities.PlanTelefonia;
import com.sb.siloko.service.PlanTelefoniaService;

/**
 * Controlador para los planes de telefonia
 * @author David Hoyos
 */
@RestController
@RequestMapping
public class PlanTelefoniaController {

  @Autowired
  PlanTelefoniaService planTelefoniaService;
  /**
   * Metodo GET para solicitar todos los planes de telefonia.
   * @return Una lista de todos los planes de telefonia.
   */
  @GetMapping("/planes")
  public List<PlanTelefonia> getPlanesTelefonia() {
    return planTelefoniaService.findAllPlanesTelefonia();
  }
  /**
   * Metodo GET para solicitar todos planes de telefonia por su foreanea cliente_id
   * @return Una lista de todos los planes de telefonia pertenecientes a la id del cliente enviada.
   * @param clienteId Es el id del cliente
   */
  @GetMapping("/planes/cliente/{clienteId}")
  public  List<PlanTelefonia> getPlanesTelefoniaByClienteId (@PathVariable Long clienteId) {
    return planTelefoniaService.findPlanesTelefoniaByClienteId(clienteId);
  }
}