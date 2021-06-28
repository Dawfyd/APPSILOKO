package com.sb.siloko.service.repository;

import com.sb.siloko.models.entities.Electrodomestico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ElectrodomesticoRepository extends JpaRepository<Electrodomestico, Long> {

    @Query("SELECT u FROM Electrodomestico u WHERE u.codigoArticulo = ?1")
    Electrodomestico findByCodigoArticuloJPQL(String codigoArticulo);
    //Electrodomestico findByCodigoArticulo(String codigoArticulo);
}

