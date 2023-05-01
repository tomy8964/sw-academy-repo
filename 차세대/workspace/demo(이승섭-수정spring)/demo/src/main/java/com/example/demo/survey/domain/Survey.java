package com.example.demo.survey.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
public class Survey {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private int type; // DTO 에서 Integer로 받고 String으로 DB 저장
    private int font;
    private int fontSize;
    private int layout;
    private String description;

    @OneToMany(mappedBy = "survey_id", fetch = FetchType.LAZY)
    private List<Question> content;

    @Builder
    public Survey(Long id, String title, int type, int font,int fontSize,int layout,String description, List<Question> content) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.font=font;
        this.fontSize=fontSize;
        this.description=description;
        this.layout=layout;
        this.content = content;
    }
}
