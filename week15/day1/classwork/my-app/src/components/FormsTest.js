// import { render } from "@testing-library/react";
import React from "react";

class FormTest extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName : '',
            lastName : '',
            isChecked : false
        }
    }

    handleChange =(e)=>{
        // console.log(e.target.value);
        // this.setState({firstName:e.target.value})
        const value = e.target=='checkbox' ? e.target.checked : e.target.value
        this.setState({[e.target.name]:value})
    }
    // handleChangeLast =(e)=>{
    //     this.setState({lastName:e.target.value})
    // }
    handleSubmit =(e)=>{
        e.preventDefault()
        alert(`Hello there ${this.state.firstName} ${this.state.lastName} ${this.state.isChecked}`)
    }

render(){
    return(
        <>
         <form onSubmit={this.handleSubmit}>
             First name: <input type='text' name="firstName" onChange={this.handleChange}/>
             <br/>
             Last name: <input type='text' name="lastName" onChange={this.handleChange}/>
             <br/>
             <input type='checkbox' value={this.state.isChecked} name="isChecked" onChange={this.handleChange} /> 
             <input type='submit' value='Submit' />
         </form>
        </>
    )
}
}

export default FormTest