import React from "react"; // only for class components

class Color extends React.Component{
    constructor(){
        super();
        this.state = {
            favoriteColor : 'Red'
        };
    }
    componentDidMount(){
        setTimeout(() => {
            changeColor();
            }, 5000);
        const changeColor = ()=>{
            if(this.state.favoriteColor === 'Red'){
                this.setState({favoriteColor: "Yellow"});
            }   
        }
        
    }
    render() {
        const changeColorClick = ()=>{
            if(this.state.favoriteColor){
                this.setState({favoriteColor: "Blue"});
            }
        }
        return(
            <>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <button onClick={changeColorClick}>click</button>
            </>
        )
    }
}


export default Color;