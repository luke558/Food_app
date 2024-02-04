import React from 'react';
import './SwipeButtons.css';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton>
      <CloseIcon fontSize='large' style={{color:'rgb(255, 93, 93)'}}/>
      </IconButton>
      <IconButton>
      <MenuIcon fontSize='large' style={{color: 'black'}}/>
      </IconButton>
      <IconButton>
      <FavoriteIcon style={{color:'rgb(62, 202, 57)'}} fontSize='large'/>
      </IconButton>
      
      
    </div>
  )
}

export default SwipeButtons
