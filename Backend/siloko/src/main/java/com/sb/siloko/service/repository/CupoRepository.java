package com.sb.siloko.service.repository;

import com.sb.siloko.models.entities.Cupo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CupoRepository extends JpaRepository<Cupo, Long> {
}