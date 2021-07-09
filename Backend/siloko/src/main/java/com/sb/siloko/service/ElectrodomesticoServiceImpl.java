package com.sb.siloko.service;

import com.sb.siloko.models.entities.Electrodomestico;
import com.sb.siloko.service.repository.ElectrodomesticoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

/**
 * Componente que implementa el servicio de electrodomesticos
 * @author David Hoyos
 */
@Component
public class ElectrodomesticoServiceImpl implements ElectrodomesticoService {
    @Autowired
    ElectrodomesticoRepository electrodomesticoRepository;

    @Override
    public List<Electrodomestico> findAllElectrodomesticos() {
        return electrodomesticoRepository.findAll();
    }
    @Override
    public  Electrodomestico findElectrodomesticoById(Long id) {
        return electrodomesticoRepository.findById(id).orElse(null);
    }
    @Override
    public  Electrodomestico findElectrodomesticoByCodigoArticulo(String codigoArticulo) {
        return electrodomesticoRepository.findByCodigoArticuloJPQL(codigoArticulo);
    }
}
