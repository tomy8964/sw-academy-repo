import React from "react";
import styled from "styled-components";
const StyledTextarea = styled.textarea`
    width: 450px;
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    margin: 10px 50px 50px 50px;
`;

function TextSurvey(props) {
const { title, height, value, onChange } = props;
return (
    <div> 
        <p>{title}</p>
    <StyledTextarea height="480px" value={value} onChange={onChange} />
    </div>
);
}
export default TextSurvey;
