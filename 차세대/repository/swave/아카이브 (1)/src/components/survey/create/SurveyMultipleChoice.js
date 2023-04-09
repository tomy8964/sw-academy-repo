import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { surveyListState } from '../../../contexts/atom';
import { updateSurveyContent } from '../../../utils/updateJSON';

import MultipleChoiceOption from './MultipleChoiceOption';

function SurveyMultipleChoice(props) {
    const [surveyList, setSurveyList] = useRecoilState(surveyListState);
    const [choiceId, setChoiceId] = useState(
        surveyList.content[props.index].content &&
        surveyList.content[props.index].content[surveyList.content[props.index].content.length - 1].id + 1);

    const surveyId = props.id;
    const surveyIndex = props.index;

    function onChangeInput(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            let newContent = {
                problemId : surveyId,
                categoryId : prev.content[surveyIndex].categoryId,
                problemTitle : e.target.value,
                content : prev.content[surveyIndex].content
            };
            return updateSurveyContent(prev, newContent, surveyIndex);
        });
        console.log(surveyList);
    }

    function onClickAddOption(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            let newContent = {
                problemId : surveyId,
                categoryId : prev.content[surveyIndex].categoryId,
                problemTitle : prev.content[surveyIndex].problemTitle,
                content: [...prev.content[surveyIndex].content, { id : choiceId, content : "" }]
            };
            return updateSurveyContent(prev, newContent, surveyIndex);
        });
        setChoiceId((prev) => { return prev + 1; });
        console.log(surveyList);
    }

    return (
        <div className="problem_container">
            <input placeholder="제목을 입력해 주세요" value={surveyList.content[surveyIndex].problemTitle || ""} className='survey_input' onChange={(e) => onChangeInput(e)}></input>
            <div>
                {surveyList.content[surveyIndex].content && surveyList.content[surveyIndex].content.map((option, index) => {
                    return <MultipleChoiceOption key={option.id} id={surveyId} choiceId={option.id} index={surveyIndex} choiceIndex={index} />;
                })}
                <div className="small_button_container">
                    <div className="small_button" style={{ width: "50%", marginRight: "0px" }} onClick={(e) => onClickAddOption(e)}>
                        <h1>+</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SurveyMultipleChoice;