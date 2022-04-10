import React from "react";


class SearchBox extends React.Component {
    constructor(){
        super()
        this.state = {
            text : ""
        }
    }
    handleChange =(e)=>{
        this.setState({text : e.target.value})
    }
    render(){
        const {text} = this.state
        return(
            <>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={()=> this.props.handleClick(text)}>Search</button>
            </>    
        )
    }
    
}

export default SearchBox;