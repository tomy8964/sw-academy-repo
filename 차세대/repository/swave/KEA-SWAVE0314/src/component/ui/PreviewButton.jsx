import React, { useState } from "react";
import styled from "styled-components";
import Preview from "./Preview";

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


function PreviewButton({surveyLists, value}) {
    const [previewOn,setPreviewOn] = useState(false);
    const onClick = () => {
       setPreviewOn(!previewOn);
       console.log("surveyList", surveyLists);
    };
    return (
        <div>
        <StyledButton onClick={onClick}>{value}</StyledButton>
        <hr></hr>
        <h1>미리보기</h1>
        {previewOn === true && (
                surveyLists.map((surveyList)=><Preview surveyList={surveyList}/>)
            )
        }
        </div>
    );
}
export default PreviewButton;
