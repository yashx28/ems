import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

  const Signup = () => {
      const [email, setEmail] =  useState('')
      const [password, setPassword] =  useState('')
      const [name  , setName] =  useState('')
      const navigate = useNavigate()
  
     const handle =() => {
      navigate('/login')
     } 
    
     const  SubmitEvent = async (e) => {
      e.preventDefault()
     try {
    const response = await axios.post('http://localhost:3000/signup', {
      name,
      email,
      password,
    });

    alert(response.data.message);

    if (response.data.message === 'Signup successful') {
      navigate('/login');
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message); // show "Already Have account"
    } else {
      alert('Something went wrong');
    }
    console.error(error);
  }
      setEmail('')
      setPassword('')
      setName('')
     }
    return (
      <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 p-20 rounded-2xl '>
          <form 
          onSubmit={(e)=>{
              SubmitEvent(e)
          }}
           className='flex flex-col item-center justify-center'
           >
            <div className='flex items-center justify-center'>
         <h1 className='text-3xl font-bold' >Sign Up</h1></div>
              <input 
              value={name}
              onChange={(e)=>{
                 setName(e.target.value)
              }}
               className=' mt-3 outline-none bg-transparent border-2 border-emerald-600 px-2 py-2 rounded-full' 
               type='text' 
               placeholder='Enter Your Name'
                required 
                />
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
                
           <button className=' mt-3 outline-none bg-emerald-600 px-2 py-2 rounded-full' >
             Sign Up
           </button>
          </form>
          <div className='flex ml-6'>
          <p className='text-sm text-red-400'>Already have acc.</p>
          <button onClick={handle} className='text-blue-500  text-sm' >/login</button>
          </div>
         
          </div>
          </div>
  
            )}
export default Signup
