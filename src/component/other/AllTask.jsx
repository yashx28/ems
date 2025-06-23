import React from 'react'
import  { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AllTask = () => {
      const [employees, setEmployees] = useState([]);
      const navigate = useNavigate()

     const handle = () => {
  navigate('/EmployeeDashboard');
};

     useEffect(() => {
    axios.get('https://ems-api-o1q9.onrender.com/getdata')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div  id='alltask' className='bg-[#1C1C1C] mt-5 p-5 h-40 overflow-auto '>
     <h1 className='text-xl font-bold mb-3'> All Employees </h1>
          {employees.map(emp => (
            <div onClick={handle} key={emp._id}  className='bg-gray-600 cursor-pointer flex  justify-between rounded-lg text-lg px-4 mb-2 py-2'>
              {emp.name}
               <div>
                <button  className='bg-blue-500 rounded px-2 '>Edit</button>
                <button className='bg-red-500 rounded px-2 ml-2'>Delete</button></div>
            </div>
          ))}
    </div>
  )
}

export default AllTask
