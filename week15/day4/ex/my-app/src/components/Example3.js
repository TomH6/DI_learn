import React from "react";
import data from '../data.json';
import Exp from './Exp';


class Example3 extends React.Component{
    constructor(){
        super(); 
        
        
    }
    render(){
        
        return(
            <> 
            <div>
                {      
                    (data["Experiences"]).map((item, i)=> {

                        return(

                            <Exp key ={i} src ={item.logo} companyName={item.companyName} url={item.url} 
                            title={item.roles[0]["title"]} startDate={item.roles[0].startDate} location={item.roles[0].location}
                            description={item.roles[0].description}/>
                        )
                    })
                }     
            </div>
        </>
        )
    }
}
export default Example3