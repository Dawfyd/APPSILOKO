package com.sb.siloko.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "CUPO")
public class Cupo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Min(value = 500000, message = "El cupo maximo no puede ser inferior a 500mil")
    @Max(value = 10000000, message = "El cupo maximo no puede ser superior a 10 millones")
    @Column(name = "CUPO_MAXIMO", nullable = false)
    private Integer cupoMaximo;

    @Column(name = "CUPO_DISPONIBLE")
    private Integer cupoDisponible = 0;

    @Column(name = "ESTADO_CUPO", nullable = false)
    private Boolean estadoCupo;

}
