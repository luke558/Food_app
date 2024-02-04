import React from 'react'
import Header from '../components/Header';
import TinderCards from '../components/TinderCards';
import SwipeButtons from '../components/SwipeButtons';
import './VegFood.css';
import FilterPage from './FilterPage';
const [likedItems, setLikedItems] = useState([])


const VegFood = () => {
  
  return (
    <div>
    <Header />
    <TinderCards />
    <SwipeButtons />
    </div>
  )
}

export default VegFood
