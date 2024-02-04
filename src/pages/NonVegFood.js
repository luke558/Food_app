import React from 'react'
import TinderCardsNonVeg from '../components/TinderCardsNonVeg'
import SwipeButtons from '../components/SwipeButtons'
import Header from '../components/Header'
import FilterPage from './FilterPage'

const NonVegFood = () => {
  return (
    <div>
      <Header />
      <TinderCardsNonVeg />
      <SwipeButtons />
    </div>
  )
}

export default NonVegFood
