import './App.css';
import {
  RecoilRoot,
  atom,
  useRecoilState,
} from "recoil";

import { useState } from 'react';

import styled from 'styled-components';

const AppBlock = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem 1rem 2rem 1rem;
  margin: 1rem 1rem 1rem 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin: 1rem 1rem 1rem 1rem;
  }
`;

function App() {
  const lottoNum = atom({
    key:'lottoNum',
    default: ''
  });

  const randomNum = atom({
    key:'randomNum',
    default: ''
  });
  
  const input1 = atom({
    key:'input1',
    default: ''
  });
  
  const input2 = atom({
    key:'input2',
    default: ''
  });
  
  const countNum = atom({
    key:'countNum',
    default: 0
  });

  function IntInput(){
    const[lotto, setLotto] = useRecoilState(lottoNum);
    const[random, setRandom] = useRecoilState(randomNum);
    const[intInput1, setIntInput1] = useRecoilState(input1);
    const[intInput2, setIntInput2] = useRecoilState(input2);
    const[count, setCount] = useRecoilState(countNum);
    const[ready, setReady] = useState(0);

    const onChange1 = (event) => {
      setIntInput1(Number.parseInt(event.target.value));
    }
    const onChange2 = (event) => {
      setIntInput2(Number.parseInt(event.target.value));
    }

    function getRandomArray(idxSize, range) {
      var indexs = new Array();
      var hasValue = false;
      
      while(indexs.length < idxSize) {
        hasValue = false;
        var temp = parseInt(Math.random() * range);
        for(let c = 0; c < indexs.length; c++) {
          if(temp === indexs[c]) {
            hasValue = true;
            break;
          }
        }
        if(hasValue === false) {
          indexs.push(temp);
        } 
      }
      return indexs;
    }

    const setLottoRan = () => {
      var randomArray = getRandomArray(9,47);
      console.log("randomArray",randomArray);
      setLotto([randomArray]);
    }

    const setRan = () => {
      var randomArray = getRandomArray(7,47);
      console.log("randomArray",randomArray);
      randomArray = [...randomArray,intInput1]; 
      randomArray = [...randomArray,intInput2];
      setRandom([randomArray]);
    }
    
    const findNum = () => {
      var value = 0;
      setCount(0);
      for (let i=0; i<9; i++){
        if(random[0].includes(lotto[0][i])){
          value++; 
        }
      }
      console.log("count:", count);
      setCount(value);
    }

    function sortArr(arr){
      const arrCopy = [...arr];
      for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i; j++){
          if(arrCopy[j]>arrCopy[j+1]){
            const temp = arrCopy[j];
            arrCopy[j] = arrCopy[j+1];
            arrCopy[j+1] = temp;
          }
        }
      }
      return arrCopy;
    }

    const lottoStart = ()=>{
      if(ready===0) {
        setReady(ready+1);
        setLottoRan();
        setRan();
      } else {
          setReady(ready+1);
          setLottoRan();
          setRan();
          findNum();
          let sortArrCopy = sortArr(lotto[0]);
          setLotto([sortArrCopy]);
          sortArrCopy = sortArr(random[0]);
          setRandom([sortArrCopy]);
          console.log("lotto", lotto[0]);
          console.log("random", random[0]);
          console.log("ready", ready);  
      }
    }
    
    const lottoRestart = ()=>{
      window.location.replace("/")
    }

    function Result() {
      if(ready>1){
        return(
          <div>
            <p>로또 번호: </p><input type="text" value={lotto} />
            <p>추첨 번호: </p><input type="text" value={random} />
            <p>맞힌 갯수: {count} </p>
          </div>
        );
      }
      if ( count > 2 ) {
        if(count===9){
          return <p>1등 당첨!!</p>
        } else{
          return <p>Bonus!!</p>;
        }
      } else {
          return null;
      }
    }

    return(
      <div>
        <input type="text" value={intInput1} onChange={onChange1} />
        <br />
        <input type="text" value={intInput2} onChange={onChange2} />
        <br />
        <br />
        <div>Number1: {intInput1}</div>
        <br />
        <div>Number2: {intInput2}</div>
        <br />
        <AppBlock onClick={lottoStart}>Two num input</AppBlock>
        <AppBlock onClick={lottoStart}>lotto start</AppBlock>
        <AppBlock onClick={lottoRestart}>lotto Restart</AppBlock>
        <br />
        {Result()}
        <br />

      </div>
    );
  }

  return (
    <RecoilRoot>
      <div className='App'>
        <h1>Hello GCU-Kakao</h1>
        <h2>Lotto</h2>
        <IntInput />
      </div>
    </RecoilRoot>
  );
}
export default App;
