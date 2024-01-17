import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/home', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        setMessage(response.data && response.data.message);
        setUserEmail(response.data.userInfo.names)
      } catch (err) {
        console.error('Error:', err.response && err.response.data && err.response.data.message);

        // Redirect to login on 403 Forbidden
        if (err.response && err.response.status === 403) {
          navigate('/login');
        }
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };

    fetchToken();
  }, [navigate]);

  // Render loading message while fetching data
  if (loading) {
    return <></>;
  }

  return (
    <div>
      <p>Hello, { userEmail }</p>
      <h1>{message}</h1>
    </div>
  );
}

export default Home;
