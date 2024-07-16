package com.sh.vue_restap_prac.controller.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class SurveyCreateResponse {

    private Long id;
    private String msg;

    @Builder
    public SurveyCreateResponse(Long id, String msg) {
        this.id = id;
        this.msg = msg;
    }
}
