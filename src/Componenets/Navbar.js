import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Navbar = () => {
    const[value,updatedvalue]=useState("sanj");
    //Usestate is used to get the two values and updtae it whenever we want!
  return  (
    <div>
        <div className='one'>
        <h1>Meat & Eat</h1>
        </div>
        <div className='two'>
        <ul>
            <li onClick={()=>updatedvalue("Home")} id='three' className={value==="Home"?"active":""}>
            <GoHome  className='icon' /> Home
            </li>
            <li onClick={()=>updatedvalue("Favourites")} id='three'  className={value==="Favourites"?"active":""}>
            <MdOutlineFavoriteBorder className='icon'/>Favourites
            </li>
            <li onClick={()=>updatedvalue("Contact-us")} id='three'   className={value==="Contact-us"?"active":""}>
            <MdOutlineLocalPhone className='icon'/>Contact-us
            </li>
            <li onClick={()=>updatedvalue("About-us")} id='three'  className={value==="About-us"?"active":""}>
            <BsPeople className='icon' />  About-us
            </li>
        </ul>
        </div>
        <div className='four'>
             <CiShoppingCart id='cart' className='icon' />
             <nav id='pos'>
             <Link to="/Logpage" >SignIn</Link>
             </nav>

        </div>
      
    </div>
  )
}

export default Navbar
