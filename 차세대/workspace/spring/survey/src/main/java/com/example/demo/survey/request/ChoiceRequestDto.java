package com.example.demo.survey.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChoiceRequestDto {
    private Long id;
    private String choiceName;
}
