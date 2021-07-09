package com.sb.siloko.models.dto;

import lombok.Data;
/**
 * DTO para la creacion de cupos
 * @author David Hoyos
 */
@Data
public class CupoPostDto {
    private Integer cupoMaximo;
    private Boolean estadoCupo;
    private Long clienteId;
}
