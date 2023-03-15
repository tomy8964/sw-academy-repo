import styled from "styled-components";

function Car(props) {
    return <Ul>[{props.id}] {props.name} {props.price} {props.info}</Ul>;
}

const Ul = styled.ul`
 justifyContent: 'space-between';
`;

export default function Garage(){
    const cars = [
        {id:1, name: 'GRANDEUR', price:'4500', info: 'Graceful design'},
        {id:2, name: 'BMW     ', price:'7800', info: 'Functional of hign level'},
        {id:3, name: 'Audi    ', price:'6000', info: 'Car'},
        {id:4, name: 'K5      ', price:'3500', info: 'Car'},
        {id:5, name: 'GENESIS ', price:'6700', info: 'Popular Car'}];
    
    return(
    <>
        <h1>Car List</h1>
        <Ul>
            {cars.map((car)=> <Car key={car.id} id={car.id} name={car.name} price={car.price}  info={car.info}/>)}
        </Ul>
    </>
    );
}

