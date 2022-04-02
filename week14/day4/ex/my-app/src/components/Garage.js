import React from "react"; // only for class components

class Garage extends React.Component{
    constructor(){
        super();
        
    }
    componentDidMount(){
        
    }
    render(){
        
        return(
            
            <> 
                <h3>Who lives in my {this.props.size} garage?</h3>  
            </>
        )
    }
}

export default Garage