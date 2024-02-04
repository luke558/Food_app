import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,Routes,Route} from "react-router-dom";
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import SelectionPage  from './pages/SelectionPage';
import {selectedOption} from'./pages/SelectionPage'
import VegFood from './pages/VegFood';
import NonVegFood from './pages/NonVegFood';
import FilterPage from './pages/FilterPage';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/Veg' element={ <VegFood />}/>
      <Route path='/SelectionPage' element={<SelectionPage/>}/>
      <Route path='/NonVeg' element={<NonVegFood/>}/>
      <Route path='/' element={<FilterPage/>}/>
      
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
