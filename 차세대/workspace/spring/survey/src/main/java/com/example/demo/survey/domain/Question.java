package com.example.demo.survey.domain;

import javax.persistence.*;
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
    private Long id;
    private String title;
    private String description;
    @OneToMany(mappedBy = "questionId", fetch = FetchType.LAZY)
    private List<Choice> choiceList;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey_id;

    @Builder
    public Question(Long id, String title, String description, List<Choice> choiceList) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.choiceList = choiceList;
    }
}
