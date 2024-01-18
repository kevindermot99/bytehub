import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
      <div>
          <h1>ByteHub</h1>
          <div><Link to="/home">Home</Link><Link to="/login">Login</Link><Link to="/register">Register</Link></div>
          <div></div>
      </div>
  )
}

export default LandingPage