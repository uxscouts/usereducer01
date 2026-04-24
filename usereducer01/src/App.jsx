import { useState } from 'react'
import BookingPage from './components/BookingPage';
import ParentForm from './components/ParentForm';
import ProductPrice from './components/ProductPrice';
import './App.css'

const initialState = {quantity: 1, price: 10, total: 10};

function reducer(state, action){
  switch(action.type){
    case SET_QUANTITY:
      const newQuantity=action.payload;
    return{
      ...state, //copy existing state
      quantity: newQuantity, 
      // update total based on existing state
      total: newQuantity * state.price
    };
    default: 
      return state;
  }
}

function App() {
  return (
    <>
      <h1>App.jsx</h1>
    {/*}  <hr/>
      <ParentForm/> 
       <hr/> */}
      <BookingPage/> 
      <hr/>
      <ParentForm/> 
      <hr/>
      <ProductPrice/> 
      <hr/>      
    </>
  )
}

export default App;
