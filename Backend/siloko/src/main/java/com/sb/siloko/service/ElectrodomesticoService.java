package com.sb.siloko.service;

import java.util.List;
import com.sb.siloko.models.entities.Electrodomestico;

public interface ElectrodomesticoService {
    public List<Electrodomestico> findAllElectrodomesticos();
    public Electrodomestico findElectrodomesticoById(Long id);
    public Electrodomestico findElectrodomesticoByCodigoArticulo(String codigoArticulo);
}
