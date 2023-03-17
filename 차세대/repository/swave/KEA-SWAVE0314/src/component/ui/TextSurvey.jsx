import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 300px;
    padding: 16px;
    font-size: 16px;
    line-height: 10px;
    margin: 10px 10px 10px 10px;
    text-align: center;
`;

const HeadTitle = styled.div`
    color: white;
    background: steelblue;
    border: 1px steelblue;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 3;
    margin: 50px 450px 50px 450px;
`;

function TextSurvey({ headTitle, value, placeholder, makeData }) {
    function onChange(e){
        makeData(e.target.value);
    }
    return (
        <>
        <div>
            {
                headTitle === null
                ? <></>
                : <HeadTitle>{headTitle}</HeadTitle>
            }
        </div>
        <div> 
        <StyledTextarea onChange={onChange} height="300px" placeholder={placeholder} value={value} />
        </div>
        </>
    );
}
export default TextSurvey;
