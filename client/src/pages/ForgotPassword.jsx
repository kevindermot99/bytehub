import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import google from '../images/google.png'
import github from '../images/github.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'react-lottie';
import lockAnimation from '../lotties/lock.json';
import { IoClose } from "react-icons/io5";
import emailjs from "@emailjs/browser";



function forgotPassword() {
  const [names, setNames] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [submitting, setSubmitting] = useState(false)
  const vcode = useRef < HTMLInputElement > (null)

  const navigate = useNavigate()
  const customId = "custom-id-yes";




  return (
    !localStorage.getItem("token") ?
      <div className='auth-page'>
        <div className="ap-card">
          <div className="apc-right">
            <h1>Bytehub.</h1>
            <h3>Forgot your Password? Reset it easly with your account email.</h3>
            <form className={submitting ? 'submitting' : ''}>
              <label>
                <p>Email</p>
                <input type="email" autoComplete='on' required />
              </label>
              <label>
                <button type="submit" className='submitbtn'><span className='name'>Send Code</span><span className='btnloader'></span></button>
              </label>
              <label>
              </label>
            </form>
            <Link className='close' to="/login"><IoClose /></Link>
          </div>
          <ToastContainer />
        </div>
      </div>
      : <Navigate to="/" />
  )
}

export default forgotPassword