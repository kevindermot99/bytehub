import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import AllDesigns from './pages/AllDesigns'
import Login from './pages/Login'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import MyLibrary from './pages/MyLibrary'
import ProtectRoutes from './components/ProtectRoutes'


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
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/alldesigns' element={<AllDesigns />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route element={<ProtectRoutes />}>
            <Route path='/mylibrary' element={<MyLibrary />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
