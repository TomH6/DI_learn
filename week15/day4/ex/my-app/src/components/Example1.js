import React from "react";
import data from '../data.json';
import List from "./List";

class Example1 extends React.Component {
    constructor(){
        super(); 
        
    }
    render(){
        return(
            <>
            <div>
                {                      
                <List arr = {data.SocialMedias} property = {""}/>
                }     
            </div>
            </>
        )
    }
} 
export default Example1