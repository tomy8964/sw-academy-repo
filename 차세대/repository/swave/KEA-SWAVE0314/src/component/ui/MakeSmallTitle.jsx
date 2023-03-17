import React, { useState } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 300px;
    padding: 16px;
    font-size: 16px;
    line-height: 10px;
    margin: 10px 10px 10px 10px;
    text-align: center;
`;

function MakeSmallTitle({ smallTitle, optionNum, value, placeholder, setSmallTitle }) {
    const [message, setMessage] = useState([{}]);
    function onChange(e){
        setMessage(e.target.value);   
        console.log({message});
        console.log(optionNum);
    }
    const handleClick = () => {
        smallTitle.push(message);
        console.log(smallTitle);
    }
    return (    
        <div> 
        <StyledTextarea name={optionNum} onChange={onChange} height="300px" placeholder={placeholder} value={value} />
        <p></p>
        {/* 버튼을 누를때 smallTitle의 값이 바뀜 */}
        <button onClick={handleClick}>문항 내용 확인</button>
        </div>
    );
}
export default MakeSmallTitle;
