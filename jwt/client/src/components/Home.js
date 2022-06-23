import { useState, useEffect, useContext } from "react";
import jwt_decode from 'jwt-decode';
import {AppContext} from '../App';
import { useNavigate } from "react-router-dom";


const Home = (props) => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [ exp, setExp] = useState('');
    const {accessToken} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const decode = jwt_decode(accessToken.accessToken);
        // setUserId(decode.userId);
        // setEmail(decode.email);
        // const expire = decode.exp;
        // setExp(new Date(expire*1000).toString());
        // if(expire<new Date().getTime()){
        //     navigate('/login')
        // };
    });

    return(
        <>
            <h1>Home</h1>
            <h3>{userId}</h3>
            <h3>{email}</h3>
            <h4>{exp}</h4>

        </>
    )
};
export default Home;