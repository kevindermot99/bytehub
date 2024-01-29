import React, { useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import google from '../images/google.png'
import github from '../images/github.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'react-lottie';
import lockAnimation from '../lotties/lock.json';


function Login() {
  const [names, setNames] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [submitting, setSubmitting] = useState(false)


  const navigate = useNavigate()
  const customId = "custom-id-yes";

  const handleLogin = async (e) => {
    setSubmitting(true)
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);

      const key = "token"
      const value = response.data.token
      const setItemWithTimestamp = (key, value) => {
        const item = {
          value: value,
          timestamp: new Date().getTime(),
        };
        localStorage.setItem(key, JSON.stringify(item));
      };

      navigate('/', { replace: true })
    }

    catch (err) {
      setSubmitting(false)
      toast.error(err.response.data.message, {toastId: customId})
    }

  }

  const rockAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: lockAnimation,
  }

  return (
    !localStorage.getItem("token") ?
      <div className='auth-page'>
        <div className="ap-card">

          <div className="apc-left">
            <div className="lottie-container">
              <Lottie options={rockAnimationOptions}></Lottie>
            </div>
          </div>
          <div className="apc-right">
            <h1>Bytehub.</h1>
            <h3>Welcome back! we're so happy to see you.</h3>
            <form onSubmit={handleLogin} className={submitting ? 'submitting' : ''}>
              <label>
                <p>Email</p>
                <input type="email" autoComplete='on' placeholder='someone@example.com' onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <label>
                <p>Password</p>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
                <Link to="/">forgot password</Link>
              </label>
              <label>
                <button type="submit" className='submitbtn'><span className='name'>Login</span><span className='btnloader'></span></button>
              </label>
              <label>
                <p>Dont have an account? <Link to="/register">Sign up</Link></p>
              </label>
            </form>
            <p className='oaths-p'>or continue</p>
            <div className='oaths'>
              <button><img src={google} />with Google</button>
              <button><img src={github} />with Github</button>
            </div>
            <Link className='close' to="/">X</Link>
          </div>
          <ToastContainer />
        </div>
      </div>
      : <Navigate to="/" />
  )
}

export default Login