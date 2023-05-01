import { useState,useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { surveyListState } from '../../../contexts/atom';

import SurveyChoice from './SurveyChoice';
import SurveyMultipleChoice from './SurveyMultipleChoice';
import SurveyQuestion from './SurveyQuestion';

function CreateSurvey(props) {
    const [surveyList, setSurveyList] = useRecoilState(surveyListState);
    const [category,setCategory] = useState(surveyList.content[props.index].problemType);

    const surveyId = props.id;
    const surveyIndex = props.index;
    
    
    useEffect(() => {
        setCategory(surveyList.content[surveyIndex].problemType);
    }, [surveyList.content, surveyIndex]);
    
    function onClickDeleteButton(e){
        e.preventDefault();
        setSurveyList((prev) => {
            const deletedContent = prev.content.filter((element) => element.problemId !== surveyId);
            console.log(surveyList);
            return {
                id : prev.id,
                title : prev.title,
                desctiption : prev.desctiption,
                type : prev.type,
                design: prev.design,
                content : deletedContent
            }; 
        });
    }

    return (
        <div className="create_survey" onClick={(e) => props.onClickEvent(e,surveyIndex)}>
            <div>
                {category === 0 ? <SurveyQuestion key={surveyId} id={surveyId} index={surveyIndex}/> 
                : category === 1 ? <SurveyChoice key={surveyId} id={surveyId} index={surveyIndex}/> 
                : <SurveyMultipleChoice key={surveyId} id={surveyId} index={surveyIndex}/>}
            </div>
            <div className="small_button_container">
                <div className="small_button" onClick={(e)=>onClickDeleteButton(e)}>
                    <h1>-</h1>
                </div>
            </div>
        </div>
    );
}

export default CreateSurvey;