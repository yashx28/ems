import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/TasklistNumber'
import Tasklist from '../Tasklist/Tasklist'
import { getUserData } from '../../utils/LocalStorage'
import { useEffect } from 'react'
const EmployeeDashboard = () => {
  const user =  getUserData();
    useEffect(() => {
    console.log("Logged in user data:", user);
  }, [user]);
  
  return (
    <div className='p-12 bg-[#1C1C1C]  w-screen'>
  
    <Header user={user} />
    <TasklistNumber />
    <Tasklist />
    </div>
  )
}

export default EmployeeDashboard
