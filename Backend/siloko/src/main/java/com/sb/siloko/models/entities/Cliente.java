package com.sb.siloko.models.entities;

import javax.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "CLIENTE",indexes = @Index(name = "cc_index",columnList = "CEDULA_CIUDADANIA"))
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CEDULA_CIUDADANIA", nullable = false, unique = true)
    private String cedulaCiudadania;

    @Column(name = "NOMBRE", nullable = false)
    private String nombre;

    @Column(name = "APELLIDO", nullable = false)
    private String apellido;

    // Colombia
    @Column(name = "PAIS", nullable = false)
    private String pais;

    @Column(name = "CIUDAD", nullable = false)
    private String ciudad;

    // estrato socioeconomico: 1 - 2 - 3 - 4 - 5 - 6
    @Column(name = "ESTRATO", nullable = false)
    private Integer estrato;

    @JoinColumn(name = "CUPO_ID", nullable = true, foreignKey = @ForeignKey(name = "FK_CUPO_CLIENTE"), referencedColumnName="ID")
    @OneToOne(optional = true)
    private Cupo cupo = null;
}
