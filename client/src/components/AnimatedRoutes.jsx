import React from 'react'
import { Routes, Route, BrowserRouter, Router, useLocation } from 'react-router-dom'
import AllDesigns from '../pages/AllDesigns'
import Login from '../pages/Login'
import Register from '../pages/Register'
import LandingPage from '../pages/LandingPage'
import NotFound from '../pages/NotFound'
import MyLibrary from '../pages/MyLibrary'
import ForgotPassword from '../pages/ForgotPassword'
import ProtectRoutes from '../components/ProtectRoutes'

import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/alldesigns' element={<AllDesigns />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/forgot Password' element={<ForgotPassword />}></Route>
                <Route element={<ProtectRoutes />}>
                    <Route path='/mylibrary' element={<MyLibrary />}></Route>
                </Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes