import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { surveyListState } from '../../../contexts/atom';
import { answerListState } from '../../../contexts/atom';
import { updateAnswerContent } from '../../../utils/updateJSON';

function ViewSurveyChoice(props) {
    const [anwser, setAnwser] = useState(true);
    const surveyList = useRecoilValue(surveyListState);
    const [anwserList, setAnwserList] = useRecoilState(answerListState);

    const choiceList = [{ label: "예", value: true }, { label: "아니오", value: false }]

    const onChangeRadioButton = (e) => {
        setAnwser(JSON.parse(e.target.value));
        setAnwserList((prev) => {
            let newContent = {
                id : anwserList.content[props.index].id,
                content : anwser
            }
            return updateAnswerContent(prev, newContent, props.index);
        });
    };

    const RadioButton = ({ label, value, checked, onChange }) => {
        return (
            <label className="radio_container">
                <input className="radio" type="radio" value={value} checked={checked} onChange={onChange} />
                <div className="label_container" style={{ width: "20%" }}>{label}</div>
            </label>
        );
    };

    return (
        <div className="problem_container" style={{ padding: "20px", marginBottom: "30px" }}>
            <h1 style={{ textAlign: "left" }}>{surveyList.content[props.index].problemTitle} </h1>
            <div>
                {choiceList.map((choice,index) => {
                    return <RadioButton key={index} label={choice.label} value={choice.value} checked={choice.value === anwser} onChange={(e) => onChangeRadioButton(e)}/>
                })}
            </div>
        </div>
    );
}

export default ViewSurveyChoice;