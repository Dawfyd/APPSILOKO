package com.sb.siloko.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.sb.siloko.models.entities.Electrodomestico;
import com.sb.siloko.service.ElectrodomesticoService;

@RestController
@RequestMapping
public class ElectrodomesticoController {
    @Autowired
    ElectrodomesticoService electrodomesticoService;

    @GetMapping("/electrodomesticos")
    public List<Electrodomestico> getElectrodomesticos() {
        return electrodomesticoService.findAllElectrodomesticos();
    }

    @GetMapping("/electrodomesticos/{id}")
    public  Electrodomestico getElectrodomesticoById (@PathVariable Long id) {
        return electrodomesticoService.findElectrodomesticoById(id);
    }

    @GetMapping("/electrodomesticos/code/{codigoArticulo}")
    public  Electrodomestico getElectrodomesticoByCodigoArticulo (@PathVariable String codigoArticulo) {
        return electrodomesticoService.findElectrodomesticoByCodigoArticulo(codigoArticulo);
    }
}
