package com.sh.vue_restap_prac.controller;

import com.sh.vue_restap_prac.controller.request.CoachCreate;
import com.sh.vue_restap_prac.service.CoachService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:8080", methods = {RequestMethod.PUT, RequestMethod.GET})
@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
public class CoachController {

    private final CoachService coachService;

    @PostMapping("/coaches/{userId}")
    public void create(@PathVariable String userId, @RequestBody CoachCreate coachCreate) {
        // validate...

        // save
        coachService.register(userId,coachCreate);

    }
}
