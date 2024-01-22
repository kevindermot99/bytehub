import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import axios from 'axios'
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";


function Navbar() {
    const [loggingOut, setLoggingOut] = useState(false)
    const [openAccountMenu, setOpenAccountMenu] = useState(false)
    const [openSettings, setOpenSettings] = useState(false)
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

    const settings = () => {
        setOpenAccountMenu(false)
        setOpenSettings(true)
    }

    const closeSettings = () => {
        setOpenSettings(false)
    }

    const updateUsename = (e) => {
        e.preventDefault()
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
                                <div className='am-header'><h4>{userNames}</h4><div className="settings"></div><HiOutlineCog6Tooth onClick={settings} /></div>
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

            {/* settings modal */}
            <div className={`settings-wrapper ${openSettings ? 'show' : ''}`}>
                <div className="settings-body">
                <div className='settings'>
            <div className='s-header'>
                <h1>Account Settings</h1>
                <IoClose onClick={closeSettings} />
            </div>
            <div className="s-section">
                <h3> Change username </h3>
                <p>Enter your desired display name below:</p>
                <form onSubmit={updateUsename}>
                    <input type="text" className='edit' value={userNames} />
                    <input type="submit" value="Save" className='save' />
                </form>
            </div>
            <div className="s-section">
                <h3> Theme Settings </h3>
                <p>Choose your preferred theme:</p>
                <div className="themes">
                    <div>
                        <div className="theme-box active"><FaCheckCircle /></div>
                        <p>Light</p>
                    </div>
                    <div>
                        <div className="theme-box dark"><FaCheckCircle /></div>
                        <p>Dark</p>
                    </div>
                </div>
            </div>

        </div >
                </div>
            </div>
        </div>
    )
}

export default Navbar