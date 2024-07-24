package com.sh.vue_restap_prac.repository;

import com.sh.vue_restap_prac.domain.Mentoring;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentoringRepository extends JpaRepository<Mentoring, Long> {
}
