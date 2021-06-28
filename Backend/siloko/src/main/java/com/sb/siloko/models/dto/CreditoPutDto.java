package com.sb.siloko.models.dto;

import lombok.Data;

@Data
public class CreditoPutDto {
    private Long id;
    private String estado;
    private Integer numeroCuotas;
}
