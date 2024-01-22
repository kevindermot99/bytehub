import { useState } from 'react'
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import AllDesigns from './pages/AllDesigns'
import Login from './pages/Login'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import MyLibrary from './pages/MyLibrary'
import ProtectRoutes from './components/ProtectRoutes'


function App() {

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
