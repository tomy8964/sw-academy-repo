import React from "react";
import styled from "styled-components";

const StyledButton = styled.button` 
    padding: 8px 16px; 
    font-size: 16px; bo
    rder-width: 1px; b
    order-radius: 8px; 
    cursor: pointer;

    color: white;
    background: steelblue;
    padding: 0.375rem 0.75rem;
    border: 1px solid steelblue;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
`;


function AddButton({surveyType ,
    surveyTitle,
    choiceNum,
    smallTitle,
    value,
    surveyList,
    surveyListNum,
    setSurveyList,
    setSurveyListNum}) {
    const onClick = () => {
        console.log(surveyTitle);
        surveyList.push([surveyTitle,
                        choiceNum,
                        surveyType,
                        smallTitle,
        ]);
        setSurveyListNum(surveyListNum+1);
        console.log(surveyList);    
        console.log("surveyListNum",surveyListNum);

    }
    return (
        <div>
        <StyledButton onClick={onClick}>{value}</StyledButton>
        </div>
    );
}
export default AddButton;
