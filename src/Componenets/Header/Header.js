import React from 'react'
import './Header.css'
import image from './image2.jpg';
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Header = () => {
    const ans={
     backgroundImage: `url(${image})`
    }
  return (
    <div className='header' style={ans}>
            <h2 className='headers'>Order your<span> favourite food here!</span></h2>
            <button className='ones'>View Menu<IoArrowForwardCircleOutline className='arricon'/></button>

      
    </div>
  )
}

export default Header
