import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect, useRef, useContext} from 'react';
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { context } from "../App";
import './styles/Register.css';


//* USERNAME & PWD REQUIRMENTS
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = (props) => {

    const {title} = props
    const [usernameToPost, setUsernameToPost] = useState(''); 
    const [passwordToPost, setPasswordToPost] = useState(''); 
    const [msg, setMsg] = useState('');           
    const navigate = useNavigate();               
    const {setAccessToken, setUsername} = useContext(context);

    
    const [validName, setValidName] = useState(false); // user validation
    const [userFocus, setUserFocus] = useState(false); // focus for input field

    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const userRef = useRef(); //Setting focus for accecibility
    const errRef = useRef();


    useEffect(()=> {  
        setMsg('');
    },[])

    useEffect(()=>{
        // set focus on-load
        userRef.current.focus();
    },[])

    useEffect(()=> {
        // to validate userName
        setValidName(USER_REGEX.test(usernameToPost));
    },[usernameToPost]);

    useEffect(()=> {
        // to validate pwd & matchPwd
        const result = PWD_REGEX.test(passwordToPost);
        console.log('result=>',result);
        console.log('pwd=>',passwordToPost);
        setValidPwd(result);
        const match = passwordToPost === matchPwd;
        setValidMatchPwd(match)
    },[passwordToPost, matchPwd]);


    const handleAction = async(e,id) => {  
        e.preventDefault();
        
            try {
                let response = await axios.post('/api/users/register',{
                    usernameToPost,passwordToPost
                },{
                    withCredentials:true,
                    headers:{
                        'Access-Control-Allow-Origin':'*',
                        'Content-Type':'application/json'
                    }
                });
                setMsg(response.data.msg);
                navigate("../login", { replace: true });
            } catch (e) {
                console.log(e.response.data.msg);
                console.log(e);
                setMsg(e.response.data.msg)
            }
    };

    return(
        <div style={{display: "flex", justifyContent: "space-around", width: "90%" }}>
        <section>
            <p ref={errRef} className={msg ?'errmsg' :'offscreen'} aria-live='assertive'> 
                {msg}
            </p>
            <h2>{title}</h2>

            <form onSubmit={(e)=>handleAction(e, title)}> 

               <label htmlFor="username">
                    Username:
                    <span className={validName ?"valid" :"hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !usernameToPost ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUsernameToPost(e.target.value)}
                    value={usernameToPost}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && usernameToPost && !validName ? "instructions" : "offscreen"}>
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
                    <span className={validPwd || !passwordToPost ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPasswordToPost(e.target.value)}
                    value={passwordToPost}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && passwordToPost && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include Uppercased & Lowercased letters, A number and A special chracter.<br />
                    Allowed special characters: <span aria-label='exclamation mark'>! </span>
                    <span aria-label='at symbol'>@ </span><span aria-label='hashtag'># </span>
                    <span aria-label='dollar sign'>$ </span><span aria-label='percent'>% </span>
                </p>
                <div className={title == 'Login' ?"hide" :null}> 
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
                </div>
                <p>
                    <button  disabled={!validName || !validPwd || !validMatchPwd ?true :false} >
                         {title}
                    </button>
                </p>
            </form>
            <p>Already registered? <br/>
                <span className='line'>
                <Link to='/login'>
                    Log In
                </Link>
                </span>
            </p>
        </section>
        </div>
    )
};

export default Register;