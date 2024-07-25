package com.sh.vue_restap_prac.service;

import com.sh.vue_restap_prac.controller.request.MentoringCreate;
import com.sh.vue_restap_prac.controller.response.CoachResponse;
import com.sh.vue_restap_prac.controller.response.MentoringResponse;
import com.sh.vue_restap_prac.domain.Coach;
import com.sh.vue_restap_prac.domain.Mentoring;
import com.sh.vue_restap_prac.repository.CoachRepository;
import com.sh.vue_restap_prac.repository.MentoringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

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

    public List<MentoringResponse> getList(Long coachId) {
        return mentoringRepository.findById(coachId).stream()
                .map(Mentoring -> MentoringResponse.builder()
                        .id(Mentoring.getId())
                        .coachResponse(CoachResponse.of(Mentoring.getCoach()))
                        .userEmail(Mentoring.getUserEmail())
                        .message(Mentoring.getMessage())
                        .build())
                .collect(toList());
    }
}
