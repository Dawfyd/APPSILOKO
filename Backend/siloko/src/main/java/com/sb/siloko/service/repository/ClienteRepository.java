package com.sb.siloko.service.repository;

import java.util.List;
import com.sb.siloko.models.entities.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findByCedulaCiudadania(String cedulaCiudadania);
    Cliente findClienteByCupoId(Long cupoId);

}
