package com.sb.siloko.service.repository;

import com.sb.siloko.models.entities.Credito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Repositorio para la persistencia de los creditos
 * @author David Hoyos
 */
@Repository
public interface CreditoRepository extends JpaRepository<Credito, Long> {
    List<Credito> findByCupoId(Long cupoId);
    Credito findByCodigoAprobacion(String codigoAprobacion);
}
