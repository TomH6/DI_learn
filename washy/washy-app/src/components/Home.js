import React from "react";
import Header from './Header';
import Register from "./Register";


const Home = (props) => {
    return(
        <>
            <Header />
            <div style={{display: "flex", justifyContent: "space-around", width: "90%" }}>
               <Register title={'Register'}/>
            </div>    
        </>
    )
};
export default Home;
