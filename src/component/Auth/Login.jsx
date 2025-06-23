  import React from 'react'
  import {useState } from 'react';
import { setUserData } from '../../utils/localStorage';
  import axios from 'axios'
  import { useNavigate } from 'react-router-dom'
  const Login = () => {
      const [email, setEmail] =  useState('')
      const [password, setPassword] =  useState('')
      const navigate = useNavigate()

      const handle  = () => {
        navigate('/signup')
      }


      const  SubmitEvent =(e) => {
        e.preventDefault()
        axios.post(('https://ems-api-o1q9.onrender.com/login'), {email,password})
        .then(result => {
          console.log(result)
          if(email === "admin@gmail.com")
            {
              console.log(result.data.user)  
               localStorage.setItem("user", JSON.stringify(result.data.user));
          navigate('/AdminDashborad')
        }else if(result.data.status  === "success")
          {
            alert('Successfull Login ') 
            console.log(result.data.user)   
          localStorage.setItem("user", JSON.stringify(result.data.user));
            navigate('/EmployeeDashboard')
          }
        })
        .catch(error => console.log(error))
        setEmail('')
        setPassword('')
    }
    return (
      <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 p-20 rounded-2xl '>
          <form 
          onSubmit={(e)=>{
              SubmitEvent(e)
          }}
          className='flex flex-col item-center justify-center'
          > <div className='flex items-center justify-center'>
          <h1 className='text-3xl font-bold' >Login</h1></div>
              <input 
              value={email}
              onChange={(e)=>{
                  setEmail(e.target.value)
              }}
              className=' mt-3 outline-none bg-transparent border-2 border-emerald-600 px-2 py-2 rounded-full' 
              type='email' 
              placeholder='Enter Your Email'
                required 
                />
              <input
              value={password}
              onChange={(e)=>{
              setPassword(e.target.value)
              }}
              className= 'mt-3 outline-none border-2 bg-transparent border-emerald-600 px-2 py-2 rounded-full'
                type='password' 
                placeholder='Enter Your password' 
                required 
                />
          <button className=' mt-3 outline-none  bg-emerald-600 px-2 py-2 rounded-full' >
              Login
          </button>
          </form>
        <div className='flex ml-6'>
            <p className='text-sm text-red-400'>Create Acoount.</p>
            <button onClick={handle} className='text-blue-500  text-sm' >/Signup</button>
            </div>


        </div>
      </div>
    )
  }

  export default Login
