import TextSurvey from "./TextSurvey";
import Select from "./Select";
import React, { useState } from "react";
import MakeCheckBoxList from "./MakeCheckBoxList";
import AddButton from "./AddButton";

function SurveyCom({surveyListNum, setSurveyListNum, surveyList}){
    
      const option1 = [
        {
            id:1,
            value:"주관식",
        },
        {
            id:2,
            value:"객관식",
        },
        {
            id:3,
            value:"찬부식",
        },
      ]
    
    const [surveyType, setSurveyType] = useState('');
    const [surveyTitle, setSurveyTitle] = useState('');
    const [choiceNum, setChoiceNum] = useState(2);
    const [smallTitle, setSmallTitle] = useState([]);
    const smallTitleId = useState(1);

    const select = ()=>{
        if(surveyType === ''){
            return <div><p></p></div>;
        } else if (surveyType === '주관식'){
            return <TextSurvey/>;
        } else if (surveyType === '객관식'){
            return <MakeCheckBoxList smallTitle={smallTitle} setSmallTitle={createSmallTitle} setChoiceNum={setChoiceNum}/>;
        } else {
            return <div><p></p></div>;
        }
    }

    const createSmallTitle = (smallTitle) => {
        const newItem = {
          id : smallTitleId.current,
          smallTitle,
        };
        smallTitleId.current += 1;
        //dataId.current는 0이라는 값을 가짐, 값을 한번쓰면 1씩 아이디가 증가
        setSmallTitle([...smallTitle, newItem])
        //원래배열에 있던 데이터를 스트레드연산자로 쓰고, 새로운데이터를 newItem을 앞에 추가
    };

    return(
    <>
    <TextSurvey makeData={setSurveyTitle} placeholder="설문 제목을 작성하시오." height="50px"/>
    <p>{console.log(surveyTitle)}</p>
    <p>{console.log(surveyType)}</p>
    <Select setValue={setSurveyType} options={option1} choiceNum={choiceNum}/>
    <div>{select()}</div>
    <p>{console.log(choiceNum)}</p>
    <p>{console.log(smallTitle)}</p>
    <AddButton surveyType={surveyType} 
                surveyTitle={surveyTitle}
                choiceNum={choiceNum}
                smallTitle={smallTitle}
                surveyList={surveyList}
                value="추가 및 확인"
                setSurveyListNum={setSurveyListNum}
                surveyListNum={surveyListNum} />
                <p></p>
    </>
    );
}

export default SurveyCom;