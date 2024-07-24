package com.sh.vue_restap_prac.controller.request;

import com.sh.vue_restap_prac.domain.Coach;
import com.sh.vue_restap_prac.domain.Mentoring;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter @Setter
@NoArgsConstructor
public class MentoringCreate {

    private String userEmail;
    private String message;

    public Mentoring toEntity(Coach coach) {
        return Mentoring.builder()
                .coach(coach)
                .userEmail(this.userEmail)
                .message(this.message)
                .build();
    }
}
