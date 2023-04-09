import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { surveyListState } from '../../../contexts/atom';
import { answerListState } from '../../../contexts/atom';
import { updateAnswerContent } from '../../../utils/updateJSON';

function ViewSurveyMultipleChoice(props) {
    const [anwser, setAnwser] = useState(0);
    const surveyList = useRecoilValue(surveyListState);
    const [anwserList, setAnwserList] = useRecoilState(answerListState);

    const onChangeRadioButton = (e) => {
        setAnwser(parseInt(e.target.value));
        setAnwserList((prev) => {
            let newContent = {
                id : anwserList.content[props.index].id,
                content : anwser
            }
            return updateAnswerContent(prev, newContent, props.index);
        });
    };

    const RadioButton = ({ label, value, checked ,onChange }) => {
        return (
            <label className="radio_container">
                <input className="radio" type="radio" value={value} checked={checked} onChange={onChange} />
                <div className="label_container">{label}</div>
            </label>
        );
    };

    return (
        <div className="problem_container" style={{padding:"20px",marginBottom:"30px"}}>
            <h1 style={{textAlign:"left"}}>{surveyList.content[props.index].problemTitle} </h1>
            {surveyList.content[props.index].content.map((option, index)=>{
                return(
                    <RadioButton key={index} label={option.content} value={index} checked={anwser === index} onChange={(e) => onChangeRadioButton(e)}/>
                )})
            }
        </div>
    );
}

export default ViewSurveyMultipleChoice;