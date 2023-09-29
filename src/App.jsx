import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero'
import Sidebar from './components/Sidebar';
import Skills from './components/pages/Skills';

function App() {
  const [pageId, setPageId] = useState(0)
  const handlePageId = (index) => {
    setPageId(index)
   
  }
  return (
    <BrowserRouter>
    <div className='bg-tertiary'>
      <Hero pageId={pageId}/>
      <Skills/>
      <Sidebar pageId={handlePageId}/>  
    </div>
     
    </BrowserRouter>
  )
}

export default App
