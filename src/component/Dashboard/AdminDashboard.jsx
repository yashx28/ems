import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'


const AdminDashboard = () => {
  
  return (
    <div className='h-screen p-12 w-full'>
    <Header />
      <CreateTask />
     <AllTask />  
    
    </div>
  )
}

export default AdminDashboard
