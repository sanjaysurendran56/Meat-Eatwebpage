import React, { useState } from 'react'
import './Exploremenu.css'

const Exploremenu = ({images,combo}) => {
  const[value,setvalue]=useState("Sandwidtch")
  return (
    <div>
        <h1 className='ion' style={{color:'red'}}>Explore the menu</h1>
        <br>
        </br>
        <p className='ion'>Discover a variety of delicious dishes,curated to satisfy every craving!</p>
        <br></br>
        <div className='flexi'>
          {images.map((imagec)=>{
            return(
              <div>
                <img src={imagec.srbc} alt={imagec.name}  className='size'></img>
                <p onClick={()=>setvalue(imagec.name)} className={value===imagec.name?"line":""}>{imagec.name}</p>
                </div>

            )
          })}
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <h1 style={{color:'red'}}>Avialable Combo Packs!</h1>
          <br></br>
          <div className='flexi'>
            {
              combo.map((index)=>{
                return(
                  <div className='size2'>
                    <img src={index.src}  className='size1'></img>
                    <p>{index.name}</p>
                    <h3 style={{color:'red'}}>{index.price}</h3>
                  </div>
                )
              }
            )
            }
          </div>
       

    </div>
  )
}

export default Exploremenu
