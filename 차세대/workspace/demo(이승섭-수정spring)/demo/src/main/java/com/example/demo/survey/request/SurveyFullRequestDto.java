package com.example.demo.survey.request;

import com.example.demo.survey.domain.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SurveyFullRequestDto {
    long id;
    String title;
    int type;
    String description;
    int font;
    int fontSize;
    int layout;
    List<QuestionRequestDto> content;

}
