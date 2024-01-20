import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

function AllDesigns() {
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const [userNames, setUserNames] = useState();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/alldesigns', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        setMessage(response.data && response.data.message);
        setUserNames(response.data.userInfo.names)
      } catch (err) {
          console.log(err)
          navigate('/login');
      } 
    };

    fetchToken();
  }, []);

  const logout = () => {
    localStorage.clear("token");
    location.reload();
  }

  return (
    <div>
      <Navbar />
      <p>Hello, { userNames } <button onClick={logout}>Log Out</button></p>
      <h1>{message}</h1>
    </div>
  );
}

export default AllDesigns;
