import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

import { useState } from 'react';

function App() {
  const input1 = atom({
    key:"input1",
    default:0
  });
  
  const input2 = atom({
    key:"input2",
    default:0
  });

  function IntInput(){
    const[intInput1, setIntinput1] = useRecoilState(input1);
    const[intInput2, setIntinput2] = useRecoilState(input2);
    const[value, setValue] = useState(0);


    const onChange1 = (event) => {
      setIntinput1(Number.parseInt(event.target.value));
    }
    const onChange2 = (event) => {
      setIntinput2(Number.parseInt(event.target.value));
    }

    const handleButtonClick = (buttonValue) => {
      switch (buttonValue) {
        case '+':
          setValue(intInput1+intInput2);
          break;
        case '-':
          setValue(intInput1-intInput2);
          break;
        case '*':
          setValue(intInput1*intInput2);
          break;
        case '/':
          setValue(intInput1/intInput2);
          break;
        default:
          break;
      }
    };
      

    return(
      <>
      <div>
        <input type="text" value={intInput1} onChange={onChange1} />
        <br />
        <input type="text" value={intInput2} onChange={onChange2} />
        <br />
        Number1: {intInput1}
        <br />
        Number2: {intInput2}
        <br />
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <br />
        <input type="text" value={value}/>
      </div>
      </>
    );
  }

  return (
    <RecoilRoot>
      <div className='App'>
        <h1>Hello GCU-Kakao</h1>
        <h2>Calculator</h2>
        <IntInput />
      </div>
    </RecoilRoot>
  );
}
export default App;
