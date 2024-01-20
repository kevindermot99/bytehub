import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound'>
        <h1>404 - Page Not Found</h1>
        <p>Oops! It seems like the page you are looking for is no available</p>
    <p>Don't worry, you can always &nbsp;<Link to="/"> Go back home</Link> </p>
    </div>
  )
}

export default NotFound