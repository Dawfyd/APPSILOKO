package com.sb.siloko.service;

import java.util.List;

import com.sb.siloko.models.dto.CupoPutDto;
import com.sb.siloko.models.entities.Cupo;
import com.sb.siloko.models.dto.CupoPostDto;
import org.springframework.stereotype.Service;

@Service
public interface CupoService {

    public List<Cupo> findAllCupos();

	public Cupo findCupoById(Long id);

	public Cupo saveCupo(CupoPostDto cupoPostDto);

	public String deleteCupo(Long id);

	public Cupo updateCupo(CupoPutDto cupoPutDto);

	public Boolean callProcesoMasivo();
}