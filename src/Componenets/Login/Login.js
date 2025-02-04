import React, { useState } from 'react'
import './Login.css'
import { RxCross2 } from "react-icons/rx";

const Login = ({setshowlogin}) => {
    const [current,set]=useState("Log in")
  return (
    <>
    <div className='border'>
      <h1>{current}</h1>
      <RxCross2 className='corner' onClick={()=>setshowlogin(false)} />
        </div>
        <div>
       {current==="Log in"?<></>:<input type='text' placeholder='Enter Your name' required />}
           Email:<input type='email' placeholder='Enter your email' required></input>
          Password:<input type='password' placeholder='set strong password' required></input>
            <button>{current==="sign-up"?"Create Account":"Login"}</button>
    </div>
    </>
    
  )
}

export default Login;
