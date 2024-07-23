package com.sh.vue_restap_prac.controller.request;

import com.sh.vue_restap_prac.domain.Coach;

import java.util.List;

public class CoachCreate {
    private String firstName;
    private String lastName;
    private String description;
    private int hourlyRate;
    private List<String> areas;

    public CoachCreate(String firstName, String lastName, String description, int hourlyRate, List<String> areas) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.hourlyRate = hourlyRate;
        this.areas = areas;
    }

    public Coach toEntity() {
        return Coach.builder()
                .firstName(this.firstName)
                .lastName(this.lastName)
                .description(this.description)
                .hourlyRate(this.hourlyRate)
                .areas(this.areas)
                .build();
    }
}
