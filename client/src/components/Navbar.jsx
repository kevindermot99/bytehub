import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import axios from 'axios'

function Navbar() {
    const [loggingOut, setLoggingOut] = useState(false)
    const [openAccountMenu, setOpenAccountMenu] = useState(false)
    const navigate = useNavigate()

    // auth the page
    const [authorized, setAuthorized] = useState(false)
    const [authbtns, setAuthbtns] = useState(false)
    const [userNames, setUserNames] = useState();
    const [userEmail, setUserEmail] = useState();
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setUserNames(response.data.userInfo.names)
                setUserEmail(response.data.userInfo.email)
                setAuthorized(true)
            }
            catch (err) {
                console.log(err)
                setAuthbtns(true)
                setAuthorized(false)
            }
        };

        fetchToken();
    }, [setAuthorized]);

    const toggleModal = () => {
        setOpenAccountMenu(!openAccountMenu)
    }

    const logout = async () => {
        try {
            setLoggingOut(true)
            await localStorage.removeItem("token")
            setTimeout(() => {
                window.location.reload()
            }, 1000);

        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <h1><Link to="/">Bytehub.</Link></h1>
                    <div className='nav-links'>
                        {/* <Link to="/">Home</Link> */}
                        <Link to="/alldesigns">All Designs</Link>
                        <Link to='/mylibrary'>my Library</Link>
                        <a href="https://github.com/kevindermot99/bytehub" target="_blank">GitHub</a>
                        <Link to="/">Creator</Link>
                    </div>
                </li>
                <div className='topsearch'>
                    <form>
                        <FaSearch className='srch' />
                        <input type="search" placeholder='Search Designs' />
                    </form>
                    {authorized ? (
                        <>
                            <p className={`account-letter ${openAccountMenu ? "open-modal" : ''}`} onClick={toggleModal}>{userNames.charAt(0)}</p>
                            <div className='account-menu'>
                                <h4>{userNames}</h4>
                                <p>{userEmail}</p>
                                <button onClick={logout}>
                                    {loggingOut ? <span className='btnloader'></span> : <span>Log Out</span>}
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {authbtns && (
                                <>
                                    <Link to='/login' className='button lgn'>Log in</Link>
                                    <Link to='/register' className='button'>Sign up</Link>
                                </>
                            )}
                        </>
                    )}

                </div>
            </ul>
        </div>
    )
}

export default Navbar