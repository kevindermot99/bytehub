import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='bottom-links'>
        <h1>Bytehub.</h1>
        <div className='bl-links'>
          <Link to="/home">Home</Link>
          <Link to="/">All Designs</Link>
          <Link to="/mylibrary">my Library</Link>
          <Link to="/">GitHub</Link>
          <Link to="/">Creator</Link>
        </div>
      </div>
      <p>&copy; 2023 All rights reserved</p>
    </div>
  )
}

export default Footer