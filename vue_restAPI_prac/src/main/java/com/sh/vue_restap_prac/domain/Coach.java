package com.sh.vue_restap_prac.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Coach {

    @Column(name = "coach_id")
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    @Lob
    private String description;
    private int hourlyRate;

//    @ElementCollection(targetClass = Area.class)
//    @Enumerated(EnumType.STRING)
//    @CollectionTable(name = "coach_areas", joinColumns = @JoinColumn(name = "coach_id"))
//    @Column(name = "area")
//    private Set<Area> areas;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "coach_areas", joinColumns = @JoinColumn(name = "coach_id"))
    @Column(name = "area")
    private List<String> areas;

    @Builder
    public Coach(String firstName, String lastName, String description, int hourlyRate, List<String> areas) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.hourlyRate = hourlyRate;
        this.areas = areas;
    }
}
