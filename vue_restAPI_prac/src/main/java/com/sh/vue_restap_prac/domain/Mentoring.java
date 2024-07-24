package com.sh.vue_restap_prac.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Mentoring {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mentoring_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coach_id")
    private Coach coach;

    private String userEmail;

    @Lob
    private String message;

    @Builder
    public Mentoring(Coach coach, String userEmail, String message) {
        this.coach = coach;
        this.userEmail = userEmail;
        this.message = message;
    }
}
