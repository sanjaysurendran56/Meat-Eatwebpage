import React, { useState } from 'react'
import './Home.css'
import Header from '../../Componenets/Header/Header'
import Explores from '../../Componenets/Exploremenu/Explores'
import Bucketchick from '../../Componenets/TasteUnknown/Bucketchick'
import Terms from '../../Componenets/Terms/Terms'
import Mobile from '../../Componenets/Mobile/Mobile'
import Navbar from '../../Componenets/Navbar'
import Review from '../../Componenets/Review/Review'

const Home = () => {
  const [a,b]=useState(false)
  return (
    <div>
      <Navbar />
      <Header />
      <Explores />
      <Bucketchick />
      <Mobile a={a} b={b} />
      <Review />
      <Terms />
    </div>
  )
}

export default Home
