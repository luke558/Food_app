import React, { useState } from 'react'
import './SelectionPage.css'
import { Link } from 'react-router-dom';
import FilterPage from './FilterPage';



const SelectionPage = (props) => {
  return (
      <div>
        
    <div className='container'>
    <Link to='/Vegan'><button><img src='https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400' alt='Vegan Photo'/></button></Link>
    <Link to='/Veg'><button>  <img src='https://media.istockphoto.com/id/1158578874/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=ZHAsJ9sJJoeAmwD3iU1Oo2YSKn_BG6JoE7zuG1frxwg=' alt='Veg Photo' /></button></Link>
    <Link to='/Egg'><button><img src='https://curlytales.com/wp-content/uploads/2019/10/Best-Egg-Dishes-In-Mumbai.jpg' alt='Egg Dish'/></button></Link>
    <Link to='/NonVeg'><button><img src='https://assets.thehansindia.com/h-upload/2020/03/14/953945-food.webp' alt='Non Veg Photo'/></button></Link>
    </div>
    <p className='vegan'>Vegan</p>
    <p className='veg'>Vegan+Vegetarian</p>
    <p className='egg'>Vegan+Vegetarian+Egg</p>
    <p className='nonveg'>Vegan+Vegetarian+Egg+Non-Vegetarian</p>
  
    
  </div>
  )

}

export default SelectionPage
