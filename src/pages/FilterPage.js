import React, { useState } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom';
import './FilterPage.css'
import MealTypes from '../components/MealTypes';
const options=[
  {value:"peanuts",label:"Peanuts"},
  {value:"milk",label:"Milk"},
  {vaule:"wheat",label:"Wheat"},
  {value:"soy",label:"Soy"},
  {value:"fish",label:"Fish"},
];

const FilterPage = () => {
  const [selectedOptions,setSelectedOptions]=useState([])
  const handleChange=(selectedOptions)=>{
    setSelectedOptions(selectedOptions);
  };
  const submit=()=>{
    console.log(selectedOptions);
  }

  return (
    
      <div>
     <h1>Select Your Alegies Here:-</h1>
     <Select
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      isMulti={true}
      />
       <Link to={{ pathname: '/SelectionPage', state: { selectedOptions } }}>
        <button onClick={submit}>Submit</button>
        </Link>
     


      </div >  
    
  )
}

export default FilterPage