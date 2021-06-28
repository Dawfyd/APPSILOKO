package com.sb.siloko.models.entities;

import java.util.Date;
import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.JoinColumn;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "CREDITO",indexes = @Index(name = "capr_index",columnList = "CODIGO_APROBACION"))
public class Credito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CODIGO_APROBACION")
    private String codigoAprobacion;

    @Column(name = "SALDO_PENDIENTE")
    private Integer saldoPendiente;
    // Estado del credito: Aprobado - Rechazado - Activo - Finalizado
    @Column(name = "ESTADO", nullable = false)
    @Size(min = 6, max = 10, message  = "El estado solo puede tener entre 6 y 10 caracteres")
    private String estado;

    //Causal de rechazo, en caso de que el credito halla sido rechazado.
    @Column(name = "CAUSAL")
    private String causal;

    //1 - 3 - 6 - 12 - 24 - 36
    @Column(name = "NUMERO_CUOTAS")
    @Min(value = 0, message = "El numero de cuotas no puede ser inferior a 0")
    @Max(value = 36, message = "El numero de cuotas no puede ser superior a 36")
    private Integer numeroCuotas;

    @JoinColumn(name = "CUPO_ID", nullable = false, foreignKey = @ForeignKey(name = "FK_CUPO_CREDITO"), referencedColumnName="ID")
    @ManyToOne(optional = false)
    private Cupo cupo;

    @JoinColumn(name = "ELECTRODOMESTICO_ID", nullable = false, foreignKey = @ForeignKey(name = "FK_ELECTRODOMESTICO_CREDITO"), referencedColumnName="ID")
    @ManyToOne(optional = false)
    private Electrodomestico electrodomestico;

    @Column(name="F_CREACION")
    @Temporal(TemporalType.DATE)
    private Date fechaCreacion;

    @Column(name="F_MODIFICACION")
    @Temporal(TemporalType.DATE)
    private Date fechaModificacion;
}
