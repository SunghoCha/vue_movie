package com.sh.vue_restap_prac.service;

import com.sh.vue_restap_prac.controller.request.MentoringCreate;
import com.sh.vue_restap_prac.domain.Coach;
import com.sh.vue_restap_prac.domain.Mentoring;
import com.sh.vue_restap_prac.repository.CoachRepository;
import com.sh.vue_restap_prac.repository.MentoringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MentoringService {

    private final MentoringRepository mentoringRepository;
    private final CoachRepository coachRepository;

    public Mentoring create(Long coachId, MentoringCreate mentoringCreate) {
        Coach coach = coachRepository.findById(coachId).orElseThrow(IllegalArgumentException::new);

        Mentoring mentoring = mentoringCreate.toEntity(coach);
        return mentoringRepository.save(mentoring);

    }
}
