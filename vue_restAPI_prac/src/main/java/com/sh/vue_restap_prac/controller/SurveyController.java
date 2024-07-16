package com.sh.vue_restap_prac.controller;

import com.sh.vue_restap_prac.controller.request.SurveyCreateRequest;
import com.sh.vue_restap_prac.controller.response.ApiResponse;
import com.sh.vue_restap_prac.controller.response.SurveyCreateResponse;
import com.sh.vue_restap_prac.controller.request.SurveyFindRequest;
import com.sh.vue_restap_prac.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:8080")
public class SurveyController {

    private final SurveyService surveyService;

    @GetMapping("/survey")
    public ApiResponse<List<SurveyFindRequest>> hello() {
        List<SurveyFindRequest> requests = surveyService.findAll();

        return ApiResponse.ok(requests);
    }

    @PostMapping("/create")
    public ApiResponse<Long> create(@RequestBody SurveyCreateRequest request) {
        Long savedId = surveyService.saveSurvey(request);

        return ApiResponse.ok(savedId);
    }

    @GetMapping("/hello3")
    public String hello3() {

        return "hello3";
    }
}
