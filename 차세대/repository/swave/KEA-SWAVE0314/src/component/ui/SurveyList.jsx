import React, { useState } from "react";
import SurveyCom from "./SurveyCom";
import PreviewButton from "./PreviewButton";

function SurveyList(){
    
    const [surveyList, setSurveyList] = useState([{}]);
    const [surveyListNum, setSurveyListNum] = useState(1);

    return(
        <>
        {surveyList.map(()=><SurveyCom surveyListNum={surveyListNum} setSurveyListNum={setSurveyListNum} setSurveyList={setSurveyList} surveyList={surveyList}/>)}
        <PreviewButton  surveyLists={surveyList} value="미리보기" />
        </>
    );
}

export default SurveyList;