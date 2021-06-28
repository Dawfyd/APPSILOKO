package com.sb.siloko.models.entities;

import java.util.Date;
import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "PLAN_TELEFONIA",indexes = @Index(name = "cid_index",columnList = "CLIENTE_ID"))
public class PlanTelefonia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NUMERO_CELULAR", nullable = false)
    private String numeroCelular;

    //SILOKO Basic - Vacano - Ninja
    @Column(name = "NOMBRE", nullable = false)
    private String nombre;

    // 100 minutos - 500 minutos - 1000 minutos
    @Column(name = "MINUTOS", nullable = false)
    private String minutos;

    //Activo e Inactivo
    @Column(name = "ESTADO", nullable = false)
    private Boolean estado;

    @ManyToOne(optional = false)
    @JoinColumn(name = "CLIENTE_ID", nullable = false, foreignKey = @ForeignKey(name = "FK_CLIENTE_PLAN_TELEFONIA"), referencedColumnName="ID")
    private Cliente cliente;

    @Column(name="F_CREACION")
    @Temporal(TemporalType.DATE)
    private Date fechaCreacion;

    @Column(name="F_MODIFICACION")
    @Temporal(TemporalType.DATE)
    private Date fechaModificacion;
}