import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
    const [newName, setNewName] = useState("")
    const [password, setPassword] = useState("")


    // auth the page
    const [authorized, setAuthorized] = useState(false)
    const [authbtns, setAuthbtns] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false);
    const [names, setNames] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("")
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setNames(response.data.userInfo.names)
                setNewName(response.data.userInfo.names)
                setEmail(response.data.userInfo.email)
                setId(response.data.userInfo._id)
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


    const updateUsename = async (e) => {
        try{
            setBtnLoading(true);
            axios.put('http://localhost:5000/api/updateUser/' +id, { newName })
        }
        catch(err){
            setBtnLoading(false);
            console.log(err)
        }
    }

    const deleteAccount = async (e) => {
        e.preventDefault()
        try{
            setBtnLoading(true);
            axios.delete('http://localhost:5000/api/deleteUser/' +id, { password })
            // window.location.reload()
            console.log(response.data.message)
        }
        catch(err){
            setBtnLoading(false);
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
                        <button>Creator</button>
                    </div>
                </li>
                <div className='topsearch'>
                    <form>
                        <FaSearch className='srch' />
                        <input type="search" placeholder='Search Designs' />
                    </form>
                    {authorized ? (
                        <>
                            <p className={`account-letter ${openAccountMenu ? "open-modal" : ''}`} onClick={toggleModal}>{names.charAt(0)}</p>
                            <div className='account-menu'>
                                <div className='am-header'><h4>{names}</h4><div className="settings"></div><HiOutlineCog6Tooth onClick={settings} /></div>
                                <p>{email}</p>
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
                            <form onSubmit={updateUsename} >
                                <input type="text" className='edit' placeholder='someone' value={newName} onChange={(e) => setNewName(e.target.value)} required />
                                <div className={`btnloader ${btnLoading ? "show" : ''}`}></div>
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
                            </div>
                        </div>
                        {/* <div className="s-section">
                            <h3> Delete Account </h3>
                            <p>Enter your password to confirm:</p>
                            <form onSubmit={deleteAccount} >
                                <input type="text" className='edit' onChange={(e) => setPassword(e.target.value)} required />
                                <div className={`btnloader ${btnLoading ? "show" : ''}`}></div>
                                <input type="submit" value="Delete" className='save' />
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar