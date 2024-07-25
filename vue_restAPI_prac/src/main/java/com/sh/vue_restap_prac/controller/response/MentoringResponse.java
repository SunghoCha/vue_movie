package com.sh.vue_restap_prac.controller.response;


import com.sh.vue_restap_prac.domain.Coach;
import com.sh.vue_restap_prac.domain.Mentoring;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class MentoringResponse {

    private Long id;
    private CoachResponse coachResponse;
    private String userEmail;
    private String message;

    @Builder
    public MentoringResponse(Long id, CoachResponse coachResponse, String userEmail, String message) {
        this.id = id;
        this.coachResponse = coachResponse;
        this.userEmail = userEmail;
        this.message = message;
    }
}
