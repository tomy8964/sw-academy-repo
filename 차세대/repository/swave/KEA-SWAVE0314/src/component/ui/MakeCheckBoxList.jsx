import Select from './Select';
import React, { useState } from "react";
import MakeSmallTitle from './MakeSmallTitle';

const numList = [
  {
      id:1,
      value:2,
  },
  {
      id:2,
      value:3,
  },
  {
      id:3,
      value:4,
  },
  {
      id:4,
      value:5,
  },
]


function MakeCheckBoxList({ smallTitle, setSmallTitle, setChoiceNum }) {
  const [optionNum, setOptionNum] = useState(2);
  setChoiceNum(optionNum);
  const rendering = (optionNum) => {
    const result = [];
    for (let i = 0; i < optionNum; i++) {
      result.push(<div><p>{i+1}번 문항 내용</p><MakeSmallTitle smallTitle={smallTitle} optionNum={i+1} setSmallTitle={setSmallTitle} /><p></p></div>);
    }
    return result;
  };
    return (
      <div>
        <p></p>
      <p>문항 수를 고르시오.</p>
      <Select options={numList} setValue={setOptionNum}/>
      <div>{rendering(optionNum)}</div>
      </div>
    );
}
export default MakeCheckBoxList;