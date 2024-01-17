import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [names, setNames] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post('http://localhost:5000/api/register', { names, email, password });
            navigate('/login')
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='Full Names' onChange={(e) => setNames(e.target.value)} />
                </label>
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
    )
}

export default Register