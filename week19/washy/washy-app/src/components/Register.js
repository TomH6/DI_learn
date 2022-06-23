import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './styles/Register.css';

//* USERNAME & PWD REQUIRMENTS
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const [user, setUser] = useState(''); // states for: user
    const [validName, setValidName] = useState(false); // user validation
    const [userFocus, setUserFocus] = useState(false); // focus for input field

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState(''); // problem submiting state
    const [userExists, setUserExists] = useState(false);
    const [success, setSuccess] = useState(''); // successful submit state

    const userRef = useRef(); //Setting focus for accecibility
    const errRef = useRef();

    let navigate = useNavigate();

    useEffect(()=>{
        // set focus on-load
        userRef.current.focus();
    },[])

    useEffect(()=> {
        // to validate userName
        setValidName(USER_REGEX.test(user));
    },[user]);

    useEffect(()=> {
        // to validate pwd & matchPwd
        const result = PWD_REGEX.test(pwd);
        console.log('result=>',result);
        console.log('pwd=>',pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatchPwd(match)
    },[pwd, matchPwd]);

    useEffect(()=> {
        setErrMsg('');
    },[user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //** insert new user to DB
        try {
            let response = await axios.post(`http://localhost:2222/api/users${REGISTER_URL}`,{
                username: user,
                password: pwd
            })
            
            const data = await response.data;
            console.log("datadata =>", data);


            if(data.created){
                setErrMsg(data.created)   
            } else {
                setErrMsg(data.error)
            }
        } catch (err) {
            console.log('error=>', err);
            setErrMsg(err.response);
            errRef.current.focus();
        }
        navigate("../log-in", { replace: true });
    }

    return(
        <div style={{display: "flex", justifyContent: "space-around", width: "90%" }}>
        <section>
            <p ref={errRef} className={errMsg ?'errmsg' :'offscreen'} aria-live='assertive'> 
                {errMsg}
            </p>
            <h2>LogIn</h2>
            <form onSubmit={handleSubmit}>
               <label htmlFor="username">
                    Username:
                    <span className={validName ?"valid" :"hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="password">
                    Password:
                    <span className={validPwd ?"valid" :"hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include Uppercased & Lowercased letters, A number and A special chracter.<br />
                    Allowed special characters: <span aria-label='exclamation mark'>! </span>
                    <span aria-label='at symbol'>@ </span><span aria-label='hashtag'># </span>
                    <span aria-label='dollar sign'>$ </span><span aria-label='percent'>% </span>
                </p>

                <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <span className={validMatchPwd && matchPwd ?"valid" :"hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatchPwd || !matchPwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatchPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && matchPwd && !validMatchPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include Uppercased & Lowercased letters, A number and A special chracter.<br />
                    Allowed special characters: <span aria-label='exclamation mark'>! </span>
                    <span aria-label='at symbol'>@ </span><span aria-label='hashtag'># </span>
                    <span aria-label='dollar sign'>$ </span><span aria-label='percent'>% </span>
                </p>
                <p>
                    <button disabled={!validName || !validPwd || !validMatchPwd ?true :false}>
                        Sign Up
                    </button>
                </p>
            </form>
            <p>Already registered? <br/>
                <span className='line'>
                <Link to='/log-in'>
                    Log In
                </Link>
                </span>
            </p>
        </section>
        </div>
    )
};

export default Register;