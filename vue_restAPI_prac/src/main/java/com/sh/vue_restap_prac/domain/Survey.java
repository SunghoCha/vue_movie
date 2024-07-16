package com.sh.vue_restap_prac.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Survey {

    @Column(name = "survey_id")
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

//    @Enumerated(EnumType.STRING)
//    private rating rating;

    private String rating;

    @Builder
    public Survey(String name, String rating) {
        this.name = name;
        this.rating = rating;
    }
}
