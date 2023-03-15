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


function Button(props) {
    const { title, onClick } = props;
    return <StyledButton onClick={onClick}>{title || "제출하기"}</StyledButton>;
}
export default Button;
