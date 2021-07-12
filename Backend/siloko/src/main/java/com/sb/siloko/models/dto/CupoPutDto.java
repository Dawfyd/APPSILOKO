package com.sb.siloko.models.dto;

import lombok.Data;
/**
 * DTO para la actualizacion de cupos
 * @author David Hoyos
 */
@Data
public class CupoPutDto {
    private Long id;
    private Integer cupoMaximo;
    private Boolean estadoCupo;
}
