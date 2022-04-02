import React from "react"; // only for class components
import Garage from "./Garage";

class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            color : "Racing Red"
        }
    }
    componentDidMount(){
        
    }
    render(){
        
        return(
            // This is how we get props data in A class component
            <> 
                <h2>This car is A {this.state.color} {this.props.model}</h2>
                <Garage size ={"small"}/>  
            </>
        )
    }
}

export default Car;