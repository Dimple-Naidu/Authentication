import React from 'react'
import Navbar from './navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const signout =()=>{
        localStorage.removeItem("user");
        navigate("/")
    }
  return (
    <div>
        <Navbar/>
        <div className='home'>
            <h2>Welcome to home page</h2>
            <button onClick={signout}>Signout</button>
        </div>
    </div>
  )
}

export default Home
