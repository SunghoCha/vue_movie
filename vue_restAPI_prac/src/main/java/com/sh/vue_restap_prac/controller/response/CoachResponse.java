package com.sh.vue_restap_prac.controller.response;

import com.sh.vue_restap_prac.domain.Coach;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class CoachResponse {

    private Long id;
    private String firstName;
    private String lastName;
    private String description;
    private int hourlyRate;
    private List<String> areas;

    public static CoachResponse of(Coach coach) {
        return CoachResponse.builder()
                .id(coach.getId())
                .firstName(coach.getFirstName())
                .lastName(coach.getLastName())
                .description(coach.getDescription())
                .hourlyRate(coach.getHourlyRate())
                .areas(coach.getAreas())
                .build();
    }

    @Builder
    public CoachResponse(Long id, String firstName, String lastName, String description, int hourlyRate, List<String> areas) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.hourlyRate = hourlyRate;
        this.areas = areas;
    }
}
