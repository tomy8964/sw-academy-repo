import styled from 'styled-components';
import Checkbox from './Checkbox'
import React from "react";

const Ul = styled.ul`
    margin: 50px 50px 50px 10px;
    content-align: center;
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

function CheckBoxList({headTitle, title, optionNum}) {
  const rendering = (optionNum) => {
    const result = [];
    for (let i = 0; i < optionNum; i++) {
      result.push(<Ul><Checkbox title={title[i]}/><p></p></Ul>);
    }
    return result;
  };
    return (
      <div><HeadTitle>{headTitle}</HeadTitle>
      <div>{rendering(optionNum)}</div>
      </div>
    );
}
export default CheckBoxList;