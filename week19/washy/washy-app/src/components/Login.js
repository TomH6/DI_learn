import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";

const LOGIN_URL = '/auth';


const Login = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd ] = useState('');
    const [errMsg, setErrMsg] = useState('');
  
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    
    useEffect(()=> {
        userRef.current.focus();
    },[]);

    useEffect(()=> {
        setErrMsg('')
    },[user, pwd]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:2222/api/users${LOGIN_URL}`,{
                username: user,
                password: pwd
            }   
            );
            response.data[0].username === user && response.data[0].password === pwd 
                ? navigate('/tasks') 
                : setErrMsg('Login Failed..');

                setUser('');
                setPwd('');
        } catch (err) {
            setErrMsg('Login Failed..');
            errRef.current.focus();
        }
        
    }

    return(
        <div style={{display: "flex", justifyContent: "space-around", width: "90%" }}>
                <section>
                    <p ref={errRef} className={errMsg ?"errMsg" :"offscreen"} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h2>Sign-In</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" 
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=> setUser(e.target.value)}
                            value={user}
                            required />

                        <label htmlFor="password">Password:</label>
                        <input type="password" 
                            id="password"
                            onChange={(e)=> setPwd(e.target.value)}
                            value={pwd}
                            required 
                        />
                        <p><button>Sign In</button></p>
                        
                        <p>
                            Need an account? <br/>
                            <span className="line">
                            <Link to='/sign-up'>
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