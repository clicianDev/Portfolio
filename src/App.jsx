import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Hero from './components/pages/Hero'
import Sidebar from './components/Sidebar';
import Skills from './components/pages/Skills';
import About from './components/pages/About';

function App() {
  const [pageId, setPageId] = useState(0)
  const handlePageId = (index) => {
    setPageId(index)
   
  }
  return (
    <BrowserRouter>
    <div className='bg-tertiary'>
      <Hero pageId={pageId}/>
      <About pageId={pageId}/>
      <Skills/>
      <Sidebar pageId={handlePageId}/>  

    </div>
     
    </BrowserRouter>
  )
}

export default App
