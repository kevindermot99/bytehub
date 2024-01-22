import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import userPlusAnimation from '../lotties/user-plus.json'
import google from '../images/google.png'
import github from '../images/github.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'react-lottie';

function Register() {
    const [names, setNames] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [submitting, setSubmitting] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setSubmitting(true)
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:5000/api/register', { names, email, password });
            navigate('/login')
        } catch (err) {
            setSubmitting(false)
            toast.error(err.response.data.message)
        }

    }

    const userPlusAnimationOptions = {
        loop: false,
        autoplay: true,
        animationData: userPlusAnimation,
    }


    return (
        <div className='auth-page'>
            <div className="ap-card">

                <div className="apc-left">
                    <div className="lottie-container">
                        <Lottie options={userPlusAnimationOptions}></Lottie>
                    </div>
                </div>
                <div className="apc-right">
                    <h1>Bytehub.</h1>
                    <h3>Create you free account</h3>
                    <form onSubmit={handleSubmit} className={submitting ? 'submitting' : ''}>
                        <label>
                            <p>Names</p>
                            <input type="text" autoComplete='off' placeholder='someone' onChange={(e) => setNames(e.target.value)} required />
                        </label>
                        <label>
                            <p>Email</p>
                            <input type="email" autoComplete='off' placeholder='someone@example.com' onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                        <label>
                            <button type="submit" className='submitbtn'><span className='name'>Create account</span><span className='btnloader'></span></button>
                        </label>
                        <label>
                            <p>Already have an account? <Link to="/Login">Login</Link></p>
                        </label>
                    </form>
                    <p>- or continue -</p>
                    <div className='oaths'>
                        <button><img src={google} />with Google</button>
                        <button><img src={github} />with Github</button>
                    </div>
                    <Link to="/" className='close'>X</Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Register