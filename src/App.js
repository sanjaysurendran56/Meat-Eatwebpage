import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import {Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignUp from './Componenets/SignUp/SignUp'; 

const App = () => {
 
  return (
    <div>
      <div>
        <Link to='/'></Link>
      </div>
      <Routes>
           <Route path='/' element={<Home />}></Route>
            <Route path="/SignUp" element={<SignUp />}/>
        </Routes>
    </div>
  )
}

export default App
