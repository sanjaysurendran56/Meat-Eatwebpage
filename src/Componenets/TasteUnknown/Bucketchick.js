import React from 'react'
import imagebuck1 from'./bc1.png'
import './Bucketchick.css'
import { GiArrowDunk } from "react-icons/gi";


const Bucketchick = () => {
  return (
    <>
    <br></br>
      <h1 className='nine'><GiArrowDunk></GiArrowDunk></h1>
      <h1 className='eight'>Taste the Unknown!</h1>
      <img  className='ten' src={imagebuck1}></img>
       </>
  )
}
export default Bucketchick
