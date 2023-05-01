package com.example.demo.survey.controller;

import com.example.demo.survey.request.SurveyFullRequestDto;
import com.example.demo.survey.request.SurveyRequestDto;
import com.example.demo.survey.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SurveyController {

    private final SurveyService surveyService;

    @PostMapping(value = "/api/create")
    public String create(@RequestBody SurveyFullRequestDto surveyForm) {
        System.out.println(surveyForm);
        surveyService.createSurvey(surveyForm);

        return "Success";
    }

    @GetMapping(value = "/api/survey-list")
    public List<SurveyRequestDto> readList() {
        return surveyService.readSurveyList();
    }

    @GetMapping(value = "/api/survey-list/{id}")
    public SurveyFullRequestDto readDetail(@PathVariable Long id) {
        return surveyService.readSurveyDetail(id);
    }
}
