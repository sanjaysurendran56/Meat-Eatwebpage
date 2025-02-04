import React from 'react'
import './SignUp.css'
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className='back'>
    <div className='sign'>
      <h1>Sign Up</h1>
      <input type='text' placeholder='Full Name' required></input><br></br><br></br>
      <input type='Email' placeholder='Mail Id' required></input><br></br><br></br>
      <input type='checkbox'></input>I agree to Meat&Eat's <span style={{color:'red'}}>Terms of Service, Privacy Policy and Content Policies</span><br></br><br></br>
      <button style={{color:'red'}}>Create Account</button><br></br>
      <br></br>
      <hr></hr>
      <h5>Or</h5>
      <button><FcGoogle />Sign in with Google</button><br></br><br></br>
      <h2>Already Have An Account?</h2><a style={{color:'red'}}>Login</a>   
    </div>
    </div>
  )
}

export default SignUp
