import React, { useState } from "react"
import './Login.css'
import assets from "../../assets/assets"
import { signup, login } from "../../config/firebase"


const Login =() =>{

    const [currState,setCurrState] = useState("sign up");
    const [userName,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const [email,setEmail] =useState("");

    const onSubmitHandler = (event) =>{

        event.preventDefault();
        if(currState==="Sign up"){
            signup(userName,email,password);
        }
        else{
            login(email,password)
        }
    }

    return(
        <div className="login">
        <img src={assets.logo_big} alt="" className="logo" />
        <form onSubmit={onSubmitHandler} className="login-form">
            <h2>{currState}</h2>
           {currState === "sign up"?<input onChange={(e)=> setUsername(e.target.value)} value={userName} type="UserName" placeholder="UserName" className="form-input" required/>:null}
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"placeholder="Email-Address" className="form-input" required/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password"placeholder="Password" className="form-input" required/>
            <button type="submit">{currState === "sign up"?"create account now":"Login Now"}</button>
            <div className="login-term">
                    <input type="checkbox"/>
                    <p>Agree to the terms of use & Privacy Policy.</p>   
            </div>
            <div className="login-forgot">
                {
                    currState ==="sign up"
                    ?<p className="login-toggle">Already have an account <span onClick={()=>setCurrState("login")}>Login here</span></p>
                    :<p className="login-toggle">Create an Account <span onClick={()=>setCurrState("sign up")}>Click here</span></p>
                }
        
               
            </div>
        </form> 
        </div>
    )
}
export default Login
