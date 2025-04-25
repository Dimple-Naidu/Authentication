import React from 'react'
import image from "../img/img.jpg"
import Navbar from './navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const details = {
        name:"",
        email:"",
        password:""
    }
    const [data,data2]= useState(details)
    const navigate = useNavigate();
    const inp=(e)=>{
        const name = e.target.name;
        const value=e.target.value;
        data2({...data,[name]:value})
    } 
    const submit = (e)=>{
        e.preventDefault();
        if (data.name=="" || data.email==""||data.password=="" ) {alert("enter the details")}
        else{
            let getData = JSON.parse(localStorage.getItem("user") || "[]");
            const arr = [...getData];
            arr.push(data)
            console.log(arr)
            localStorage.setItem("user",JSON.stringify(arr))
            alert ("signed up successfully");
            navigate("/login")
        }
        
    }
  
  return (
    <div>
        <Navbar/>
        <div className='main-page'>
            <form onSubmit={submit}>
                <div className='heading'>
                    <p>Sign up</p>
                </div>
                <div className='account'>
                    <input type='text' name='name' placeholder='Enter ur name' onChange={inp}/>
                    <input type='email' name='email' placeholder='Enter ur e-mail' onChange={inp}/>
                    <input type='password' name='password' placeholder='Enter ur password' onChange={inp}/>
                    <p>Already have an accoount ? <a href='/login'>Login</a></p>
                </div>
                <button>Signup</button>
            </form>
            <div>
                <img src={image} alt='image'/>
            </div>
        </div>
    </div>
  )
}

export default Signup