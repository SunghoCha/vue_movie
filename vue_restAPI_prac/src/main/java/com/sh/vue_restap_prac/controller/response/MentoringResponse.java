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
    private Coach coach;
    private String userEmail;
    private String message;

    @Builder
    public MentoringResponse(Long id, Coach coach, String userEmail, String message) {
        this.id = id;
        this.coach = coach;
        this.userEmail = userEmail;
        this.message = message;
    }
}
