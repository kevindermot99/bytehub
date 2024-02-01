import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter, Router, useLocation } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'


function App() {


  useEffect(() => {
    const key = "token"
    const checkAndDeleteItem = (key) => {
      const storedItem = localStorage.getItem(key);
      if (storedItem) {
        const parsedItem = JSON.parse(storedItem);
        const currentTime = new Date().getTime();
        const oneHourInMillis = 30 * 1000;

        
        if (currentTime - parsedItem.timestamp >= oneHourInMillis) {
          
          localStorage.removeItem(key);
        }
      }
    };

    setInterval(() => {
      checkAndDeleteItem();
    }, 2000);

  }, []);
  

  return (
    <>
      <div className='bubbles'>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
