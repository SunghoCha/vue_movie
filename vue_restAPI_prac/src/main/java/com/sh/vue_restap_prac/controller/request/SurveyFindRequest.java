package com.sh.vue_restap_prac.controller.request;

import com.sh.vue_restap_prac.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SurveyFindRequest {

    private Long id;
    private String name;
    private String rating;

    @Builder
    public SurveyFindRequest(Long id, String name, String rating) {
        this.id = id;
        this.name = name;
        this.rating = rating;
    }

    public static SurveyFindRequest of(Survey survey) {
        return SurveyFindRequest.builder()
                .id(survey.getId())
                .name(survey.getName())
                .rating(survey.getRating())
                .build();
    }
}
