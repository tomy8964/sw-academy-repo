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
        survey.setId(request.getId());
        survey.setTitle(request.getTitle());
        survey.setType(request.getType());
        survey.setDescription(request.getDescription());
        Survey savesurvey = surveyRepository.save(survey);

        for(QuestionRequestDto questionRequestDto : request.getQuestions()){
            Question newQuestion = new Question();
            newQuestion.setSurvey_id(savesurvey);
            newQuestion.setDescription(questionRequestDto.getDescription());
            Question savedQuestion = questionRepository.save(newQuestion);
            if (questionRequestDto.getChoiceList().size() > 0) {
                for (ChoiceRequestDto choiceRequestDto : questionRequestDto.getChoiceList()) {
                    Choice newChoice = new Choice();
                    newChoice.setChoiceName(choiceRequestDto.getChoiceName());
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
            dataToSend.add(new SurveyRequestDto(survey.getTitle(),survey.getDescription(),Integer.parseInt(survey.getType())));
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
        surveyFull.setDescription(survey.getDescription());
        List<QuestionRequestDto> questionList = new ArrayList<>();
        List<Question> questions = survey.getQuestionList();
        System.out.println(survey);
        for (Question questions1 : questions) {
            QuestionRequestDto question = new QuestionRequestDto();
            question.setId(questions1.getId());
            question.setDescription(questions1.getDescription());
            List<ChoiceRequestDto> choices = new ArrayList<>();
            for (Choice choice1 : questions1.getChoiceList()) {
                ChoiceRequestDto choice = new ChoiceRequestDto();
                choice.setId(choice1.getId());
                choice.setChoiceName(choice1.getChoiceName());
                choices.add(choice);
            }
            question.setChoiceList(choices);
            questionList.add(question);
        }
        surveyFull.setQuestions(questionList);

        return surveyFull;
    }
}
