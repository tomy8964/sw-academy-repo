import React from "react";
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={favoirtecolor:"red"};
    }

    shouldComponentUpdate(){
        return true;
    }

    changeColor = () => {
        this.setState({favoirtecolor:"blue"});
    }

    // componentDidMount() {
    //     setTimeout(()=>{
    //         this.setState({favoirtecolor:"yellow"})
    //     },1000)
    // }

    static getDrivedStateFromProps(props,state){
        return {favoirtecolor:props.favcol};
    }

    render(){
        return(
        <div>
        <h1>My Favorite Color is = {this.state.favoirtecolor}</h1>
        <button type="button" onClick={this.changeColor}>
            Change Color
        </button>
        </div>
        );
    }
}

export default Header;