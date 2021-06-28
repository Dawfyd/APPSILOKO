package com.sb.siloko.models.dto;

import lombok.Data;

@Data
public class CupoPostDto {
    private Integer cupoMaximo;
    private Boolean estadoCupo;
    private Long clienteId;
}
