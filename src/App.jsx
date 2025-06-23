import React from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Signup from './component/Auth/Signup'
const App = () => {
  return (
 <BrowserRouter>  
 <Routes>
   <Route path='/' element={<Login />} />
   <Route path='/signup' element={<Signup />} />  
    <Route path='/login' element={<Login />} />
   <Route path='/AdminDashborad' element={<AdminDashboard />} />
   <Route path='/EmployeeDashboard' element={<EmployeeDashboard />} />
 </Routes>
 </BrowserRouter>
  )
}

export default App
