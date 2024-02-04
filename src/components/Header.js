import React from 'react'
import "./Header.css"
import vegImg from './img/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png'
import nonVegImg from './img/clipart2772681.png'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';

function header() {
  return (
    <div className='header'>
      <Link to='/Veg'><IconButton>
      <img  className="veg" src={vegImg} alt='Veg Img'/>
      </IconButton></Link>
      <Link to='/'><IconButton>
      <DinnerDiningIcon fontSize="large"/>
      </IconButton></Link>  
      <Link to='/NonVeg'><IconButton>
      <img className="veg" src={nonVegImg} alt='Non Veg Img'/>
      </IconButton></Link>
    </div>
  )
}

export default header
