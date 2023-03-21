import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

function App() {
  const textState = atom({
    key:"textState",
    default:""
  });

  const charCountState = selector({
    key:"charCountState",
    get:({get})=>{
      const text = get(textState);

      return text.length;
    },
  });

  const add10 = selector({
    key:"add10",
    get:({get})=>{
      const text = get(textState);
      return text;
    },
  });

  function TextInput(){
    const[text, setText] = useRecoilState(textState);

    const onChange = (event) => {
      setText(event.target.value);
    }

    return(
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }

  function CharacterCount(){
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
  }

  function CharacterAdd10(){
    const value = useRecoilValue(add10);

    return <>add 10: {Number.parseInt(value) + 10}</>;
  }

  function CharacterCounter() {
    return(
      <div>
        <TextInput />
        <CharacterAdd10 />
      </div>
    );
  }

  return (
    <RecoilRoot>
      <div className='App'>
        <h1>Hello GCU-Kakao</h1>
        <h2>Add 10</h2>
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}

export default App;
