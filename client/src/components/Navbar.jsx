import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Navbar() {

    // auth the page
    const [authorized, setAuthorized] = useState(false)
    const [userNames, setUserNames] = useState();
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setUserNames(response.data.userInfo.names)
                setAuthorized(true)
            }
            catch (err) {
                console.log(err)
                setAuthorized(false)
            }
        };

        fetchToken();
    }, []);

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <h1><Link to="/">Bytehub.</Link></h1>
                    <div className='nav-links'>
                        {/* <Link to="/">Home</Link> */}
                        <Link to="/alldesigns">All Designs</Link>
                        <Link to={authorized ? '/mylibrary' : '/login'}>my Library</Link>
                        <a href="https://github.com/kevindermot99/bytehub" target="_blank">GitHub</a>
                        <Link to="/">Creator</Link>
                    </div>
                </li>
                <div className='topsearch'>
                    <form>
                        <FaSearch className='srch' />
                        <input type="search" placeholder='Search Designs' />
                    </form>
                    <Link to='/login' className='button lgn'>Log in</Link>
                    <Link to='/register' className='button'>Sign up</Link>
                </div>
            </ul>
        </div>
    )
}

export default Navbar