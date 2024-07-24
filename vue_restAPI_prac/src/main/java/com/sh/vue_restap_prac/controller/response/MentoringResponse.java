package com.sh.vue_restap_prac.controller.response;


import com.sh.vue_restap_prac.domain.Coach;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class MentoringResponse {

    private Long id;
    private Coach coach;
    private String userEmail;
    private String message;

}
