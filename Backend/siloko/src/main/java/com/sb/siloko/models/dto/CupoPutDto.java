package com.sb.siloko.models.dto;

import lombok.Data;

@Data
public class CupoPutDto {
    private Long id;
    private Integer cupoMaximo;
    private Boolean estadoCupo;
}
