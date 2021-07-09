package com.sb.siloko.models.dto;

import lombok.Data;
/**
 * DTO para la actualizacion de creditos
 * @author David Hoyos
 */
@Data
public class CreditoPutDto {
    private Long id;
    private String estado;
    private Integer numeroCuotas;
}
