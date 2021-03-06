package com.sb.siloko.service.repository;

import java.util.List;
import com.sb.siloko.models.entities.PlanTelefonia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio para la persistencia de los planes de telefonia
 * @author David Hoyos
 */
@Repository
public interface PlanTelefoniaRepository extends JpaRepository<PlanTelefonia, Long> {
    List<PlanTelefonia> findByClienteId(Long clienteId);

}