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
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;


@SpringBootTest
class SurveyServiceTest {

    @Autowired SurveyRepository surveyRepository;
    @Autowired QuestionRepository questionRepository;
    @Autowired ChoiceRepository choiceRepository;
    @Autowired SurveyService surveyService;

    @Test
    @Transactional
    void createSurvey() {
        // given
        SurveyFullRequestDto request = new SurveyFullRequestDto();
        request.setTitle("Test Survey");
        request.setType(1);
        request.setDescription("Test Description");

        QuestionRequestDto question1 = new QuestionRequestDto();
        question1.setDescription("Test Question 1");

        ChoiceRequestDto choice1 = new ChoiceRequestDto();
        choice1.setChoiceName("Test Choice 1");

        ChoiceRequestDto choice2 = new ChoiceRequestDto();
        choice2.setChoiceName("Test Choice 2");

        question1.setChoiceList(Arrays.asList(choice1, choice2));
        request.setQuestions(Arrays.asList(question1));

        // when
        String result = surveyService.createSurvey(request);

        // then
        assertEquals(result, "Success");
        List<Survey> surveyList = surveyRepository.findAll();
        assertEquals(surveyList.size(), 1);

        Survey survey = surveyList.get(0);
        assertEquals(survey.getTitle(), request.getTitle());
        assertEquals(survey.getType(), Integer.toString(request.getType()));
        assertEquals(survey.getDescription(), request.getDescription());

        List<Question> questionList = questionRepository.findAll();
        assertEquals(questionList.size(), 1);

        Question question = questionList.get(0);
        assertEquals(question.getDescription(), question1.getDescription());
        assertEquals(question.getSurvey_id(), survey);

        List<Choice> choiceList = choiceRepository.findAll();
        assertEquals(choiceList.size(), 2);

        Choice choice1Result = choiceList.get(0);
        assertEquals(choice1Result.getChoiceName(), choice1.getChoiceName());
        assertEquals(choice1Result.getQuestionId(), question);

        Choice choice2Result = choiceList.get(1);
        assertEquals(choice2Result.getChoiceName(), choice2.getChoiceName());
        assertEquals(choice2Result.getQuestionId(), question);
    }


    @Test
    @Transactional
    void testReadSurveyList() {
        // given
        Survey survey1 = new Survey();
        survey1.setTitle("Survey 1");
        survey1.setType("1");
        survey1.setDescription("Description 1");
        surveyRepository.save(survey1);

        Survey survey2 = new Survey();
        survey2.setTitle("Survey 2");
        survey2.setType("2");
        survey2.setDescription("Description 2");
        surveyRepository.save(survey2);

        // when
        List<SurveyRequestDto> result = surveyService.readSurveyList();

        // then
        assertEquals(2, result.size());
        assertEquals("Survey 1", result.get(0).getTitle());
        assertEquals("Description 1", result.get(0).getDescription());
        assertEquals(1, result.get(0).getType());
        assertEquals("Survey 2", result.get(1).getTitle());
        assertEquals("Description 2", result.get(1).getDescription());
        assertEquals(2, result.get(1).getType());
    }

    @Test
    @Transactional
    void readSurveyDetailTest() {
        // given
        Survey survey = new Survey();
        survey.setTitle("Test Survey");
        survey.setType("1");
        survey.setDescription("Test Description");
        Question question = new Question();
        question.setDescription("Test Question");
        Choice choice1 = new Choice();
        choice1.setChoiceName("Test Choice 1");
        Choice choice2 = new Choice();
        choice2.setChoiceName("Test Choice 2");
        question.setChoiceList(Arrays.asList(choice1, choice2));
        survey.setQuestionList(Arrays.asList(question));
        Survey savedSurvey = surveyRepository.save(survey);

        // when
        SurveyFullRequestDto surveyFull = surveyService.readSurveyDetail(savedSurvey.getId());

        // then
        assertEquals(savedSurvey.getTitle(), surveyFull.getTitle());
        assertEquals(Integer.parseInt(savedSurvey.getType()), surveyFull.getType());
        assertEquals(savedSurvey.getDescription(), surveyFull.getDescription());
        assertEquals(savedSurvey.getQuestionList().size(), surveyFull.getQuestions().size());
        assertEquals(savedSurvey.getQuestionList().get(0).getDescription(), surveyFull.getQuestions().get(0).getDescription());
        assertEquals(savedSurvey.getQuestionList().get(0).getChoiceList().size(), surveyFull.getQuestions().get(0).getChoiceList().size());
        assertEquals(savedSurvey.getQuestionList().get(0).getChoiceList().get(0).getChoiceName(), surveyFull.getQuestions().get(0).getChoiceList().get(0).getChoiceName());
        assertEquals(savedSurvey.getQuestionList().get(0).getChoiceList().get(1).getChoiceName(), surveyFull.getQuestions().get(0).getChoiceList().get(1).getChoiceName());
    }

}