import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    category: '',
    employeeName: '',
    employeeEmail: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAssignTask = async (e) => {
    e.preventDefault();

    if (!formData.employeeEmail || !formData.title || !formData.description) {
      setStatusMessage('Please fill all required fields.');
      return;
    }

    const task = {
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate,
      category: formData.category
    };

    try {
      const res = await axios.post('https://ems-api-o1q9.onrender.com/assign-task', {
        email: formData.employeeEmail,
        task
      });

      setStatusMessage(res.data.message || 'Task assigned successfully!');
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        category: '',
        employeeName: '',
        employeeEmail: ''
      });
    } catch (err) {
      setStatusMessage('Error assigning task. Employee may not exist.');
    }
  };

  return (
    <div className="mt-5 bg-[#1C1C1C] text-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <form onSubmit={handleAssignTask} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-3">
          <label>Task Title</label>
          <input
            className="p-2 rounded bg-transparent border-2 border-gray-400"
            type="text"
            name="title"
            placeholder="Make a UI Design"
            value={formData.title}
            onChange={handleChange}
          />

          <label>Date</label>
          <input
            className="p-2 rounded bg-transparent border-2 border-gray-400"
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />

          <label>Categories</label>
          <input
            className="p-2 rounded bg-transparent border-2 border-gray-400"
            type="text"
            name="category"
            placeholder="Design, Dev, etc."
            value={formData.category}
            onChange={handleChange}
          />

          <label>Employee Name</label>
          <input
            className="p-2 rounded bg-transparent border-2 border-gray-400"
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={formData.employeeName}
            onChange={handleChange}
          />

          <label>Employee Email</label>
          <input
            className="p-2 rounded bg-transparent border-2 border-gray-400"
            type="email"
            name="employeeEmail"
            placeholder="Employee Email"
            value={formData.employeeEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label>Description</label>
          <textarea
            className="p-2 rounded bg-transparent border-2 border-gray-400 resize-none"
            name="description"
            placeholder="Task description here..."
            rows={8}
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="py-2 mt-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition"
          >
            Create Task
          </button>

          {statusMessage && (
            <p className="mt-2 text-sm text-yellow-400">{statusMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateTask;




// import React from 'react'

// const CreateTask = () => {
//   return (
//      <div className=' mt-5 bg-[#1C1C1C] h-80'>
//         <form className=' flex  items-center justify-between p-4'>
//           <div className='text-lg mb-20  '>
//           <h3>Task tittle</h3>
//           <input  
//           className=' mb-2 outline-none rounded w-80 bg-transparent border-2 border-gray-400' 
//           type='text'
//            placeholder='Make a UI Design' 
//           />
//         <h3>Date</h3>
//         <input  
//         className='mb-2 outline-none rounded w-80 bg-transparent border-2 border-gray-400' 
//         type='date' />
//         <h3>Categories</h3>
//         <input  
//         className='mb-2 outline-none rounded w-80 bg-transparent border-2 border-gray-400' 
//         type='text'
//          placeholder='design, dev, etc.' 
//         />
//         </div>
//         <h3>Employee Name</h3>
//         <input  
//         className=' mb-2 outline-none rounded w-80 bg-transparent border-2 border-gray-400' 
//         type='text' 
//         placeholder='Employee Name'
//         />
//         <h3>Employee Email</h3>
//         <input  
//         className=' mb-2 outline-none rounded w-80 bg-transparent border-2 border-gray-400' 
//         type='email' 
//         placeholder='Employee Email'
//         />
//         <div className='flex text-lg flex-col mb-20 '>
//         <h3 >Desciption</h3>
//         <textarea  
//         className='rounded outline-none bg-transparent border-2 border-gray-400'
//          cols={40} 
//         rows={6} 
//         id=''
//          name='' 
//         />
//        <button 
//        className='mt-5 py-1 rounded-lg bg-emerald-500'>Create Task</button>
//         </div>
//         </form>
//       </div>
  
//   )
// }

// export default CreateTask
