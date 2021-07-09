package com.sb.siloko.models.entities;

import javax.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

/**
 * Entidad para la creacion de la tabla ELECTRODOMESTICO
 * @author David Hoyos
 */
@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "ELECTRODOMESTICO",indexes = @Index(name = "cart_index",columnList = "CODIGO_ARTICULO"))
public class Electrodomestico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CODIGO_ARTICULO", nullable = false)
    private String codigoArticulo;

    @Column(name = "NOMBRE", nullable = false)
    private String nombre;

    @Column(name = "DESCRIPCION", nullable = false)
    private String descripcion;

    @Column(name = "PRECIO", nullable = false)
    private Integer precio;

    //Para borrado logico
    @Column(name = "ESTADO", nullable = false)
    private Boolean estado;
}
