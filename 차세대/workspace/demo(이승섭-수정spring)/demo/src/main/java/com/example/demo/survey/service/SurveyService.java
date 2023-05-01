package com.example.demo.survey.service;

import com.example.demo.survey.domain.Choice;
import com.example.demo.survey.domain.Question;
import com.example.demo.survey.domain.Survey;
import com.example.demo.survey.repository.ChoiceRepository;
import com.example.demo.survey.repository.QuestionRepository;
import com.example.demo.survey.repository.SurveyRepository;
import com.example.demo.survey.request.ChoiceRequestDto;
import com.example.demo.survey.request.QuestionRequestDto;
import com.example.demo.survey.request.SurveyFullRequestDto;
import com.example.demo.survey.request.SurveyRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class SurveyService {

    private final SurveyRepository surveyRepository;
    private final QuestionRepository questionRepository;
    private final ChoiceRepository choiceRepository;



    // todo : task 1
    public String createSurvey(SurveyFullRequestDto request) {
        Survey survey = new Survey();
        survey.setTitle(request.getTitle());
        survey.setType(request.getType());
        survey.setFont(request.getFont());
        survey.setFontSize(request.getFontSize());
        survey.setDescription(request.getDescription());
        Survey savesurvey = surveyRepository.save(survey);
        for(QuestionRequestDto questionRequestDto : request.getContent()){
            Question newQuestion = new Question();
            newQuestion.setSurvey_id(savesurvey);
            newQuestion.setCategoryId(questionRequestDto.getCategoryId());
            newQuestion.setProblemTitle(questionRequestDto.getProblemTitle());
            Question savedQuestion = questionRepository.save(newQuestion);
            if (questionRequestDto.getContent().size() > 0) {
                for (ChoiceRequestDto choiceRequestDto : questionRequestDto.getContent()) {
                    Choice newChoice = new Choice();
                    newChoice.setContent(choiceRequestDto.getContent());
                    newChoice.setQuestionId(savedQuestion);
                    choiceRepository.save(newChoice);
                }
            }


        }



        return "Success";
    }

    // todo : task 2
    public List<SurveyRequestDto> readSurveyList() {

        List<Survey> surveyRequestDtos = surveyRepository.findAll();
        System.out.println(surveyRequestDtos);
        List<SurveyRequestDto> dataToSend = new ArrayList<>();
        for (Survey survey : surveyRequestDtos) {
            System.out.println(survey.getTitle());
            System.out.println(survey.getDescription());
            System.out.println(survey.getType());
            dataToSend.add(new SurveyRequestDto(survey.getTitle(),survey.getDescription(), Math.toIntExact(survey.getType())));
        }
        System.out.println(dataToSend.get(0).toString());
        return dataToSend;

    }

    // todo : task 3
    public SurveyFullRequestDto readSurveyDetail(Long surveyId) {
        SurveyFullRequestDto surveyFull = new SurveyFullRequestDto();
        Survey survey = surveyRepository.findById(surveyId).get();
        surveyFull.setId(survey.getId());
        surveyFull.setTitle(survey.getTitle());
        surveyFull.setType(survey.getType());
        List<QuestionRequestDto> questionList = new ArrayList<>();
        List<Question> questions = survey.getContent();
        System.out.println(survey);
        for (Question questions1 : questions) {
            QuestionRequestDto question = new QuestionRequestDto();
            question.setProblemId(question.getProblemId());
            question.setProblemTitle(question.getProblemTitle());
            question.setCategoryId(question.getCategoryId());
            question.setContent(question.getContent());
            List<ChoiceRequestDto> choices = new ArrayList<>();

            for (Choice choice1 : questions1.getContent()){
                ChoiceRequestDto choice = new ChoiceRequestDto();
                choice.setId(choice1.getId());
                choice.setContent(choice1.getContent());
                choices.add(choice);
            }
            question.setContent(choices);
            questionList.add(question);
        }
        surveyFull.setContent(questionList);

        return surveyFull;
    }
}
