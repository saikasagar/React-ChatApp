import React from 'react'
import Chat from './chat';
import App from './App';
import { useEffect,useState } from 'react';
import{useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login = () => {

    let serverData = {
        email:"admin@gmail.com",
        password: "password"
    }

    const navigate = useNavigate();
    const [authData, setAuthData]= React.useState({});
    const Login = (e)=> {
        e.preventDefault()
        if(authData.email ===serverData.email && authData.password ===serverData.password){
            console.log("login Successfull")
            navigate("/dashboard")
        } else {
            console.log("error")
        }
    }
    

  return (

 <div className='container'> 
 <label>ChatApp Login</label>
    <form className='loginform'>
    <label > Username </label><br></br >
    <input type = "email"
    onChange = {
        (e) => setAuthData({...authData, email: e.target.value }) } /> <br></br >
    <label > password </label><br></br >
    <input type = "password"
    onChange = {
        (e) => setAuthData({...authData, password: e.target.value }) } /> <br></br >
    <button onClick = {(e) => Login(e) } > login </button><br></br >
    
    <div className='container'>
        <button type='button' className='cancelbtn'>Cancel</button>
        <span className='psw'>Forgot<a>Password?</a></span>
    </div>
    </form>  
    </div>
      )
    }

export default Login