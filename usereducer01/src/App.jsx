import { useState } from 'react'
import BookingPage from './components/BookingPage';
import ParentForm from './components/ParentForm';
import './App.css'

function App() {

  return (
    <>
      <h1>App.jsx</h1>
      <hr/>
      <ParentForm/>
       <hr/>
      <BookingPage/>          
    </>
  )
}

export default App
