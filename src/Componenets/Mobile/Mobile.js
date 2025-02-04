import React, { useState } from 'react'
import './Mobile.css'
import imageapp from './mobileapp.avif'


const Mobile = ({b,a}) => {
  return (
    <div>
      <img src={imageapp} className='adjust'></img>
      <div className='we'>
      <h1>Get the<span style={{color:'red'}}> Meat&Eat app</span></h1>
      <br></br>
      <h2>We will send you a link, open it on your phone to download the app</h2>
      <br></br>
      <label>
      <input type='radio' name='gender' onClick={()=>b(false)}></input>   Mail
      </label>
      <label>
      <input type='radio' name='gender'onClick={()=>b(true)}></input>   Mobile Number
      </label>
      <br></br>
      <br></br>
     {a?<input className='wid' type='number' placeholder='Number' required></input>:<input className='wid' type='mail' placeholder='Mail' required></input>}
<button className='link'>Get Link</button>
      </div>
    </div>
  )
}

export default Mobile
