// import { render } from "@testing-library/react";
import React from "react";
import { Checkbox } from "./checkbox";

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName : '',
            lastName : '',
            age : '',
            isChecked : false,
            isOn : false,
            selectedValue : ''
        }
    }


    handleChange =(e)=>{
        const value = e.target=='checkbox' || e.target=='radio' ? e.target.checked : e.target.value
        this.setState({[e.target.name]:value})
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        alert(`Hello there ${this.state.firstName} ${this.state.lastName}. 
               You are ${this.state.age} years old, ${this.state.isOn} 
               and going for vacation to ${this.state.selectedValue}.
               Your dietary restricions are: ${this.state.isChecked}`)
    }

render(){
    return(
        <>
         <form onSubmit={this.handleSubmit}>
             <input type='text' name="firstName" placeholder="First name" onChange={this.handleChange}/>
             <br/>
             <input type='text' name="lastName" placeholder="Last name" onChange={this.handleChange}/>
             <br/>
             <input type='text' name="age" placeholder="Age" onChange={this.handleChange}/>
             <br/>
             <label>Male</label>
             <input type='radio' value='male' name="isOn" onChange={this.handleChange} /> 
             <label>Female</label>
             <input type='radio' value='female' name="isOn" onChange={this.handleChange} />
             <br/>
             <select name='selectedValue' onChange={this.handleChange}>
                 <option>-- Please choose your destination --</option>
                 <option value='Thailand'>Thailand</option>
                 <option value='Brazil'>Brazil</option>
                 <option value='Japan'>Japan</option>
             </select>
             <br/>
             <h4>Dietary Restrictions</h4>
             <input type='checkbox' value={this.state.isChecked} name="isChecked" onChange={this.handleChange} /> <span>Nut Free</span>
             <br />
             <Checkbox />
             <input type='submit' value='Submit' />
         </form>
        </>
    )
}
}

export default Form