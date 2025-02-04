import React from 'react'
import Exploremenu from './Exploremenu'
import image0 from'./bur.jpg'
import image from './fried-chicken.jpg'
import image1 from './sand.jpg'
import image2 from './Meat-Lovers-Pizza.jpg'
import image3 from './Momos.jpg'
import combo2 from './Combo2.webp'
import combo3 from './combo3.webp'
import combo4 from './combo4.webp'
import combo5 from './combo5.webp'

const Explores = () => {
const images=[{name:'Burger',srbc:image0},{name:'Chicken',srbc:image},{name:'Sandwitch',srbc:image1},{name:'Pizza',srbc:image2},{name:'Momos',srbc:image3}]
const combo=[{name:'Kiddy Veg',src:combo2,price:'Meal RS.108'},{name:'Claasic Veg',src:combo3,price:'Meal RS.165'},{name:'Classic Chicken',src:combo4,price:'Meal RS.255'},{name:'Chicken Tikka',src:combo5,price:'Meal RS.245'}]
  return (
   
    <div className='flexv'>
      <Exploremenu images={images} combo={combo}/>
      
    </div>
  )
}

export default Explores
