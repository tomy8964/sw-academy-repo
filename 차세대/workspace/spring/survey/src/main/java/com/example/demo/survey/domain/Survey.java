package com.example.demo.survey.domain;

import javax.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Survey {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String type; // DTO 에서 Integer로 받고 String으로 DB 저장
    private String description;
    @OneToMany(mappedBy = "survey_id", fetch = FetchType.LAZY)
    private List<Question> questionList;

    @Builder
    public Survey(Long id, String title, String type, String description, List<Question> questionList) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.description = description;
        this.questionList = questionList;
    }
}
