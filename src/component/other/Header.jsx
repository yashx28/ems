import React from 'react'
import { useNavigate, } from 'react-router-dom'
import { useState,useEffect } from 'react';

const Header = () => {
  const [user, setUser] = useState('');

useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
 
    const navigate = useNavigate()
        const handle = () => {
            localStorage.removeItem("user");
          navigate('/login')
        }
  return (
    <>
    <div className=' flex items-end justify-between'>
    <h1 className='text-sm'>
         hello <br /> <span className='text-3xl'>{user?.name}</span>
    </h1>
    <button onClick={handle} className='bg-red-500 rounded px-2 py-1'>
        logOut
    </button>
    </div>
     
    </>
  )
}

export default Header
