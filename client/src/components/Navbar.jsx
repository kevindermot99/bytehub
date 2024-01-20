import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <h1>Bytehub.</h1>
                    <div className='nav-links'>
                        <Link to="/">Home</Link>
                        <Link to="/alldesigns">All Designs</Link>
                        <Link to="/">my Library</Link>
                        <a href="https://github.com/kevindermot99/bytehub" target="_blank">GitHub</a>
                        <Link to="/">Creator</Link>
                    </div>
                </li>
                <div className='topsearch'>
                    <form>
                        <FaSearch className='srch' />
                        <input type="search" placeholder='Search Designs' />
                    </form>
                    <Link to='/login' className='button'>Login</Link>
                </div>
            </ul>
        </div>
    )
}

export default Navbar