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
    Long problemId;
    int categoryId;
    String problemTitle;
    List<ChoiceRequestDto> content;
}
