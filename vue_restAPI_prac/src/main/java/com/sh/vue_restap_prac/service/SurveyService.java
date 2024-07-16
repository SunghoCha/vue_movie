package com.sh.vue_restap_prac.service;

import com.sh.vue_restap_prac.controller.request.SurveyCreateRequest;
import com.sh.vue_restap_prac.controller.request.SurveyFindRequest;
import com.sh.vue_restap_prac.domain.Survey;
import com.sh.vue_restap_prac.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class SurveyService {

    private final SurveyRepository surveyRepository;

    public Long saveSurvey(SurveyCreateRequest request) {
        Survey survey = request.toEntity();
        Survey savedSurvey = surveyRepository.save(survey);

        return savedSurvey.getId();
    }

    public List<SurveyFindRequest> findAll() {
        List<Survey> surveys = surveyRepository.findAll();

        return surveys.stream()
                .map(SurveyFindRequest::of)
                .collect(Collectors.toList());
    }
}
