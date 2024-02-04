import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import food from '../constants'
import './TinderCard.css'

function TinderCardsNonVeg () {
  const [currentIndex, setCurrentIndex] = useState(food.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [likedItems, setLikedItems] = useState([])
  const [dislikedItems, setDislikedItems] = useState([])
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(food.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < food.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)

    if (direction === "right") {
      setLikedItems((prevLikedItems) => [...prevLikedItems, nameToDelete]);
    } else if (direction === "left") {
      setDislikedItems((prevDislikedItems) => [...prevDislikedItems, nameToDelete]);
    }
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < food.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }
  const vegetarianMeals = food.filter(meal => meal.strCategory === "Vegetarian");
  return (
    <div>
    
      <div className='tinderCards__cardContainer'>
        {vegetarianMeals.map((person, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={person.idMeal}
            onSwipe={(dir) => swiped(dir, person.strMeal, index)}
            onCardLeftScreen={() => outOfFrame(person.strMeal, index)}
          >
           <div 
          style={{backgroundImage:`url(${person.strMealThumb})`}}
          className="card">
            <h3>{person.strMeal}</h3>
            <p>{person.strInstructions}</p>

            
          </div>
          </TinderCard>
        ))}
      </div>

    </div>
  )
}

export default TinderCardsNonVeg