package com.sh.vue_restap_prac.controller.request;

import com.sh.vue_restap_prac.domain.Survey;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class SurveyCreateRequest {

    private String name;
    private String rating;

    @Builder
    public SurveyCreateRequest(String name, String rating) {
        this.name = name;
        this.rating = rating;
    }

    public Survey toEntity() {
        return Survey.builder()
                .name(this.name)
                .rating(this.rating)
                .build();
    }
}
