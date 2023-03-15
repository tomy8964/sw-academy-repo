import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand:"Ford",
            model:"Mustang",
            color:"red",
            year:"1964"
        };
    }
    
    changeColor = ()=>{
        this.setState({color:"blue"});
    }
    
    
    render(){
        return(
        <div>
          <h1> My {this.state.brand} </h1>  
          <p>
            it is a {this.state.color} <span></span>
            {this.state.model} <span></span>
            from {this.state.year}
          </p>
          <button   
          type="button"
          onClick={this.changeColor}>
          Change
          </button>
        </div>
        );
    }
}

export default Car;