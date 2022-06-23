import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { context } from "../App";
import jwt_decode from 'jwt-decode';
import './styles/Register.css';

const Login = () => {
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [userScore, setUserScore] = useState(0);
    // const [userId, setUserId] = useState(0);

    // const [userData, setUserData] = useState({});

    const [msg, setMsg] = useState(''); 
  
    const navigate = useNavigate();
    const {setAccessToken,
           username, 
           setUsername, 
           userPassword,
           setUserPassword,
           setUserScore,
           setUserId
    } = useContext(context);
    // console.log(username, userPassword);
    const userRef = useRef();
    const errRef = useRef();
    
    useEffect(()=> {
        userRef.current.focus();
    },[]);

    useEffect(()=> {
        setMsg('')
    },[username, password]);

    const handleAction = async(e) => {
        e.preventDefault();
        
            try {
                let response = await axios.post('/api/users/login',{
                    username,userPassword
                },{
                    withCredentials:true,
                    headers:{
                        'Access-Control-Allow-Origin':'*',
                        'Content-Type':'application/json'
                    }
                });
                // console.log(response);
                setAccessToken(response.data);
                const decode = jwt_decode(response.data.accessToken);
                setUsername(decode.username);
                setUserId(decode.userId);
                setUserScore(decode.score);
                navigate('/tasks');
            } catch (e) {
                console.log(e);
                setMsg(e.response.data.msg);
            }      
    }

    return(
        <div style={{display: "flex", justifyContent: "space-around", width: "90%" }}>
                <section>
                    <p ref={errRef} className={msg ?"errmsg" :"offscreen"} aria-live="assertive">
                        {msg}
                    </p>
                    <h2>LogIn</h2>
                    <form onSubmit={(e)=>handleAction(e)}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" 
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=> setUsername(e.target.value)}
                            value={username}
                            required />

                        <label htmlFor="password">Password:</label>
                        <input type="password" 
                            id="password"
                            onChange={(e)=> setUserPassword(e.target.value)}
                            value={userPassword}
                            required 
                        />
                        <p><button>Log In</button></p>
                        
                        <p>
                            Need an account? <br/>
                            <span className="line">
                            <Link to='/register'>
                                Go Sign Up
                            </Link>
                            </span>
                        </p>
                    </form>
                </section>
        </div>

    )
};

export default Login;