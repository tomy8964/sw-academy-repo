package com.example.demo.survey.request;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
public class SurveyRequestDto {
    String title;
    String description;
    int type;
}
