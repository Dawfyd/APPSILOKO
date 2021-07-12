package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.Electrodomestico;
import org.springframework.stereotype.Service;

/**
 * Servicio para los electrodomesticos
 * @author David Hoyos
 */
@Service
public interface ElectrodomesticoService {
    /**
     * Metodo para solicitar todos los electrodomesticos.
     * @return Una lista de todos los electrodomesticos.
     */
    public List<Electrodomestico> findAllElectrodomesticos();
    /**
     * Metodo para solicitar un electrodomesticos por su id
     * @return Un electrodomesticos que coincida con la id enviada.
     * @param id Es el id del electrodomesticos.
     */
    public Electrodomestico findElectrodomesticoById(Long id);
    /**
     * Metodo para solicitar un electrodomesticos por su codigo de articulo
     * @return Un electrodomesticos que coincida con el codigo de articulo enviado.
     * @param codigoArticulo Es el codigo de articulo del electrodomesticos.
     */
    public Electrodomestico findElectrodomesticoByCodigoArticulo(String codigoArticulo);
}
