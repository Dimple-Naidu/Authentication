import React, { useState } from 'react'
import Navbar from './navbar'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")
    const [msg,setmsg]=useState("")
    const navigate=useNavigate();

   const input=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    if ("email" == name){
        setEmail(value)
    }
    if ("password"==name){
        setPass(value)
    }
   }
   const submit=(e)=>{
    e.preventDefault();
    if (email=="" || password==""){
        alert("enter email and password")
       }
       else{
        let getDetails = JSON.parse(localStorage.getItem("user"))
        getDetails.map((currval)=>{
            let mail = currval.email;
            let pass=currval.password;
            if (mail==email && pass==password){
                alert("logged in successfully")
                navigate("/home")
            }else{
               setmsg("invalid mail or password")
            }
            console.log(currval)
        })
       }
   }
  return (
    <div>
        <Navbar/>
        <div >
            <p className='errMsg'>{msg}</p>
        <form className='login-form' onSubmit={submit}>
                <div className='heading'>
                    <p>Login</p>
                </div>
                <div className='account'>
                    <input type='email' name='email' placeholder='Enter ur e-mail' onChange={input}/>
                    <input type='password' name='password' placeholder='Enter ur password' onChange={input}/>
                    <p>if u have to create an account? <a href='/'>Signup</a></p>
                </div>
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login