package com.surveasy.surveasy.controller;

import com.surveasy.surveasy.model.Interview;
import com.surveasy.surveasy.service.InterviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@Slf4j
public class InterviewController {

    private final InterviewService interviewService;

    // 인터뷰 주문
    @PostMapping("/interview/save")
    public String createJsonInterview(@RequestBody @Valid InterviewForm form, BindingResult bindingResult) {
        log.info("POST : Interview save");

        return validation(form, bindingResult);
    }

    private String validation(InterviewForm form, BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return "인터뷰 주문 error";
        }

        Interview interview = new Interview();
        interview.setTitle(form.getTitle());
        interview.setDate(form.getDate());
        interview.setValid(form.isValid());

        interviewService.save(interview);

        return "ok";
    }
}
