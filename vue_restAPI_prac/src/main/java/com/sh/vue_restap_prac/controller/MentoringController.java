package com.sh.vue_restap_prac.controller;

import com.sh.vue_restap_prac.controller.request.MentoringCreate;
import com.sh.vue_restap_prac.controller.response.MentoringResponse;
import com.sh.vue_restap_prac.domain.Mentoring;
import com.sh.vue_restap_prac.service.MentoringService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class MentoringController {

    private final MentoringService mentoringService;

    @PostMapping("/mentorings/{coachId}")
    public ResponseEntity<Mentoring> create(@PathVariable Long coachId, @RequestBody MentoringCreate mentoringCreate) {
        log.info("coachId : {}", coachId);
        Mentoring mentoring = mentoringService.create(coachId, mentoringCreate);
        return ResponseEntity.ok(mentoring);
    }

    @GetMapping("/mentorings/{coachId}")
    public ResponseEntity<List<MentoringResponse>> getList(@PathVariable Long coachId) {
        log.info("coachId : {}", coachId);
        List<MentoringResponse> responses = mentoringService.getList(coachId);
        return ResponseEntity.ok(responses);
    }
}
