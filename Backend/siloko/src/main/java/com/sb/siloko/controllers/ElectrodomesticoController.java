package com.sb.siloko.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.sb.siloko.models.entities.Electrodomestico;
import com.sb.siloko.service.ElectrodomesticoService;

/**
 * Controlador para los electrodomesticos
 * @author David Hoyos
 */
@RestController
@RequestMapping
public class ElectrodomesticoController {
    @Autowired
    ElectrodomesticoService electrodomesticoService;
    /**
     * Metodo GET para solicitar todos los electrodomesticos.
     * @return Una lista de todos los electrodomesticos.
     */
    @GetMapping("/electrodomesticos")
    public List<Electrodomestico> getElectrodomesticos() {
        return electrodomesticoService.findAllElectrodomesticos();
    }
    /**
     * Metodo GET para solicitar un electrodomesticos por su id
     * @return Un electrodomesticos que coincida con la id enviada.
     * @param id Es el id del electrodomesticos.
     */
    @GetMapping("/electrodomesticos/{id}")
    public  Electrodomestico getElectrodomesticoById (@PathVariable Long id) {
        return electrodomesticoService.findElectrodomesticoById(id);
    }
    /**
     * Metodo GET para solicitar un electrodomesticos por su codigo de articulo
     * @return Un electrodomesticos que coincida con el codigo de articulo enviado.
     * @param codigoArticulo Es el codigo de articulo del electrodomesticos.
     */
    @GetMapping("/electrodomesticos/code/{codigoArticulo}")
    public  Electrodomestico getElectrodomesticoByCodigoArticulo (@PathVariable String codigoArticulo) {
        return electrodomesticoService.findElectrodomesticoByCodigoArticulo(codigoArticulo);
    }
}
