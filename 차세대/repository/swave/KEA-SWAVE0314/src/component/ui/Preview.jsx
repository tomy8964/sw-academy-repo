import React from "react";
import CheckBoxList from "./CheckBoxList";
import TextSurvey from "./TextSurvey";

function Preview({surveyList}) {
    return (
        <>
    {
        surveyList[2] === "객관식" && <CheckBoxList optionNum={surveyList[1]} headTitle={surveyList[0]} title={surveyList[3]}/>
    }
    {
        surveyList[2] === "주관식" && <TextSurvey headTitle={surveyList[0]}/> 
    }
        </>
    );
}
export default Preview;
