package com.example.demo.survey.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@ToString(exclude={"survey_id"})
public class Question {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long problemId;
    private int categoryId;
    private String problemTitle;

    @OneToMany(mappedBy = "questionId", fetch = FetchType.LAZY)
    private List<Choice> content;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey_id;

    @Builder
    public Question(Long problemId, int categoryId, String problemTitle, List<Choice> content) {
        this.problemId = problemId;
        this.categoryId = categoryId;
        this.problemTitle = problemTitle;
        this.content = content;
    }
}
