import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [item, setItem]=useState([]);
  useEffect(()=>{
    fetch("/api/item")
        .then((res)=>{
          console.log(res.item);
          return res.json();
        })
        .then((item)=>{
          setItem(item);
            console.log(item);
        });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        // 기본코드
        <ul>
          {item.map((v)=><li>{v}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;