import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero'
import Sidebar from './components/Sidebar';
function App() {

  return (
    <BrowserRouter>
    <div className='bg-tertiary'>
      <Hero/>
      <Sidebar/>  
    </div>
     
    </BrowserRouter>
  )
}

export default App
