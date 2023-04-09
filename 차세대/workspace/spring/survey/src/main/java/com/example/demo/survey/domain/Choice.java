package com.example.demo.survey.domain;

import javax.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@Entity
@ToString(exclude={"questionId"})
public class Choice {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String choiceName;

    @ManyToOne
    @JoinColumn(name = "questionId")
    private Question questionId;

    @Builder
    public Choice(Long id, String choiceName) {
        this.id = id;
        this.choiceName = choiceName;
    }
}
