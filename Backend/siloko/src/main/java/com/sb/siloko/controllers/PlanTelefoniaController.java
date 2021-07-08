package com.sb.siloko.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.sb.siloko.models.entities.PlanTelefonia;
import com.sb.siloko.service.PlanTelefoniaService;

@RestController
@RequestMapping
public class PlanTelefoniaController {

  @Autowired
  PlanTelefoniaService planTelefoniaService;

  @GetMapping("/planes")
  public List<PlanTelefonia> getPlanesTelefonia() {
    return planTelefoniaService.findAllPlanesTelefonia();
  }

  @GetMapping("/planes/cliente/{clienteId}")
  public  List<PlanTelefonia> getPlanesTelefoniaByClienteId (@PathVariable Long clienteId) {
    return planTelefoniaService.findPlanesTelefoniaByClienteId(clienteId);
  }
}