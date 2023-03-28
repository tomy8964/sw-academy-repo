import { useState, useEffect } from "react";
import Axios from 'axios';
import styled from "styled-components"

const H2 = styled.h2`
  /* 공통 스타일 */
  display: block;
  width: 90%;
  float: left;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  padding: 1rem 1rem 2rem 1rem;
  margin: 1rem 1rem 1rem 1rem;

  /* 크기 */
  height: 7rem;
  font-size: 5rem;

  text-align: center;

  /* 색상 */
  background: #666600;
  
`;

const Container = styled.div`
  /* 공통 스타일 */
  display: block;
  width: 90%;
  float: left;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  padding: 1rem 1rem 1rem 1rem;
  margin: 1rem 1rem 1rem 1rem;

  /* 크기 */
  height: 18rem;
  font-size: 3rem;

  text-align: center;

  /* 색상 */
  background: #228be6;
  
`;

function App() {
  const [user,setUser] = useState("");
  const [car,setCar] = useState("");
  useEffect(()=>{
    Axios.post("/api/users").then((response)=>{
      if(response.data){
        setUser(response.data);
      }else {
        alert("failed to");
      }
    });
    Axios.get("/api/getuser").then((response)=>{
      if(response.data){
        console.log(response.data);
        setUser(response.data);
      }else {
        alert("failed to");
      }
    });
    Axios.post("/api/cars").then((response)=>{
      if(response.data){
        setCar(response.data);
      }else {
        alert("failed to");
      }
    });
    Axios.get("/api/getcar").then((response)=>{
      if(response.data){
        console.log(response.data);
        setCar(response.data);
      }else {
        alert("failed to");
      }
    });
  },[]);
  return (
    <div className="App">
      <div align = 'left'style={{margin: '20px'}}>
        <H2>Car Information</H2>
        <Container>
        ID: {car.id}<br />
        Brand: {car.brand}<br />
        Company: {car.company}<br />
        Price: {car.price}<br />
        </Container>
      </div>
    </div>  
  );
}

export default App;
