import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import './Terms.css'
import burger from '../../assests/bur.jpg'

const Terms = () => {
  return (
    <div>
        <h1 className='term1'>Meat&Eat</h1>
        <br></br>
      <div className='term2'>
        <h3 className='Headingterm'><span style={{color:'red'}}>ABOUT MEAT&EAT</span></h3>
        <br></br>
        <h5>Who We are</h5>
        <br></br>
        <h5>Report Fraud</h5>
        <br></br>
        <h5>Contact-Us</h5>
      </div>
      <div className='term3'>
        <h3 className='Headingterm1'><span style={{color:'red'}}>FOR RESTAURANTS</span></h3>
        <br></br>
        <h5>Partner With Us</h5>
        <br></br>
        <h5>Apps For you</h5>
      </div>
      <div className='term4'>
        <h3 className='Headingterm1'><span style={{color:'red'}}>LEARN MORE</span></h3>
        <br></br>
        <h5>Partner With Us</h5>
        <br></br>
        <h5>Apps For you</h5>
      </div>
      <div className='term8'>
        <h3 className='Headingterm1'><span style={{color:'red'}}>SOCIAL LINKS</span></h3>
        <br></br>
        <div className='links'>
        <a href='https://www.instagram.com/meatandeatindia/'><FaInstagram /></a>
        <a href='https://play.google.com/store/apps/details?id=com.meatandeatonline&hl=en_IN'><IoLogoGooglePlaystore /></a>
        </div>
      </div>
      <hr className='line'></hr>
      <br></br>
      <h4  className='term7'>
      By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Meat&Eat™ Ltd. All rights reserved.
      </h4>
      {/* <img src={burger}></img> */}
    </div>
  )
}
export default Terms
