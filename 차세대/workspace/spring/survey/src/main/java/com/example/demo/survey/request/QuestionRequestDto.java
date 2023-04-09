package com.example.demo.survey.request;

import com.example.demo.survey.domain.Choice;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionRequestDto {
    private Long id;
    private String title;
    private String description;
    private List<ChoiceRequestDto> choiceList;
}
