package com.example.demo;

import com.example.demo.survey.domain.Choice;
import com.example.demo.survey.domain.Question;
import com.example.demo.survey.domain.Survey;
import com.example.demo.survey.repository.ChoiceRepository;
import com.example.demo.survey.repository.QuestionRepository;
import com.example.demo.survey.repository.SurveyRepository;
import com.example.demo.survey.request.ChoiceRequestDto;
import com.example.demo.survey.request.QuestionRequestDto;
import com.example.demo.survey.request.SurveyFullRequestDto;
import com.example.demo.survey.service.SurveyService;
import groovy.util.logging.Slf4j;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@SpringBootTest
@ActiveProfiles("test")
@Slf4j
class SurveyServiceTest {

    @Mock
    private SurveyRepository surveyRepository;

    @Mock
    private QuestionRepository questionRepository;

    @Mock
    private ChoiceRepository choiceRepository;

    @InjectMocks
    private SurveyService surveyService;

    @Captor
    private ArgumentCaptor<Survey> surveyCaptor;

    @Captor
    private ArgumentCaptor<Question> questionCaptor;

    @Captor
    private ArgumentCaptor<Choice> choiceCaptor;

    @Test
    void createSurveyTest() {
        SurveyFullRequestDto request = new SurveyFullRequestDto();
        request.setTitle("Test Survey");
        request.setType(1L);
        request.setFont("Arial");
        request.setFontSize(12L);
        request.setDescription("Test Description");

        List<QuestionRequestDto> questions = new ArrayList<>();
        QuestionRequestDto questionRequestDto = new QuestionRequestDto();
        questionRequestDto.setCategoryId(1L);
        questionRequestDto.setProblemTitle("Test Question");

        List<ChoiceRequestDto> choices = new ArrayList<>();
        ChoiceRequestDto choiceRequestDto = new ChoiceRequestDto();
        choiceRequestDto.setContent("Test Choice");
        choices.add(choiceRequestDto);

        questionRequestDto.setContent(choices);
        questions.add(questionRequestDto);

        request.setContent(questions);

        // When
        when(surveyRepository.save(any(Survey.class))).thenReturn(new Survey());
        when(questionRepository.save(any(Question.class))).thenReturn(new Question());
        when(choiceRepository.save(any(Choice.class))).thenReturn(new Choice());

        String result = surveyService.createSurvey(request);

        verify(surveyRepository, times(1)).save(surveyCaptor.capture());
        assertThat(surveyCaptor.getValue().getTitle()).isEqualTo(request.getTitle());
        assertThat(surveyCaptor.getValue().getType()).isEqualTo(request.getType());
        assertThat(surveyCaptor.getValue().getFont()).isEqualTo(request.getFont());
        assertThat(surveyCaptor.getValue().getFontSize()).isEqualTo(request.getFontSize());
        assertThat(surveyCaptor.getValue().getDescription()).isEqualTo(request.getDescription());

        verify(questionRepository, times(1)).save(questionCaptor.capture());
        assertThat(questionCaptor.getValue().getCategoryId()).isEqualTo(questionRequestDto.getCategoryId());
        assertThat(questionCaptor.getValue().getProblemTitle()).isEqualTo(questionRequestDto.getProblemTitle());
        assertThat(questionCaptor.getValue().getSurvey_id()).isNotNull();

        verify(choiceRepository, times(1)).save(choiceCaptor.capture());
        assertThat(choiceCaptor.getValue().getContent()).isEqualTo(choiceRequestDto.getContent());
        assertThat(choiceCaptor.getValue().getQuestionId()).isEqualTo(questionCaptor.getValue());

        assertThat(result).isEqualTo("Success");
    }
}
