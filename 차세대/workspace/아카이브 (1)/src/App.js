import './App.css';
import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Navbar from './components/Navbar'
import Survey from './pages/Survey';

function App() {
  const scrollRef = useRef([]);

  function scrollTo(index){
      scrollRef.current[index].scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar scrollTo={scrollTo} scrollRef={scrollRef}/>
        <Routes>
          <Route path="/" element={<Home scrollRef={scrollRef}/>} />
          <Route path="/Survey" element={<Survey />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
