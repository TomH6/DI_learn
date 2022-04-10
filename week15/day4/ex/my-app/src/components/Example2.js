import React from "react";
import data from '../data.json';
import List from "./List";

class Example2 extends React.Component{
    constructor(){
        super(); 
        
        
    }
    render(){
        
        return(
            <div>
                {         
                    <>
                        <h5>{data.Skills[0].Area}</h5>
                        <List arr={data.Skills[0].SkillSet} property={"Name"} id={1}/>

                        <h5>{data.Skills[1].Area}</h5>
                        <List arr={data.Skills[1].SkillSet} property={"Name"} id={2}/>
                    </>
                }     
            </div>
        )
    }
}
export default Example2