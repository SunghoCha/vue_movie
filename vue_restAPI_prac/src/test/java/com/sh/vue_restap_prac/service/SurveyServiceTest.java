package com.sh.vue_restap_prac.service;

import com.sh.vue_restap_prac.controller.request.SurveyCreateRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class SurveyServiceTest {

    @Autowired
    SurveyService surveyService;

    @Test
    @DisplayName("SurveyRequest를 전달받아 Survey를 저장하고 id값을 반환한다.")
    public void createSurvey() {
        // given
        SurveyCreateRequest request = SurveyCreateRequest.builder()
                .name("이름입니다")
                .rating("average")
                .build();
        // when
        Long savedId = surveyService.saveSurvey(request);
        // then
        assertThat(savedId).isNotNull();

    }
}