package com.sh.vue_restap_prac.service;

import com.sh.vue_restap_prac.controller.request.CoachCreate;
import com.sh.vue_restap_prac.controller.response.CoachResponse;
import com.sh.vue_restap_prac.domain.Coach;
import com.sh.vue_restap_prac.repository.CoachRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static java.util.stream.Collectors.toList;

@RequiredArgsConstructor
@Service
@Transactional
public class CoachService {

    private final CoachRepository coachRepository;

    public void register(String userId, CoachCreate coachCreate) {
        Coach coach = coachCreate.toEntity();
        coachRepository.save(coach);
    }

    public List<CoachResponse> getList() {
        return coachRepository.findAll().stream()
                .map(CoachResponse::of)
                .collect(toList());
    }
}
