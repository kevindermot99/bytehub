import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import cardBg from '../images/card-bg.jpg'


function Login() {
  const [names, setNames] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/home')
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.error(err.response.data.message || 'Invalid credentials. Please try again.');
      }
      else {
        console.error(err.response.data.message || 'Network error');
      }
    }

  }

  return (
    <div className='auth-page'>
      <div className="ap-left">
        <img src={cardBg} />
      </div>
      <div className="ap-right">
        <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <input type="submit" />
        </label>
      </form>
      </div>
      
      {/* <Link to="/">cancel</Link> */}
    </div>
  )
}

export default Login