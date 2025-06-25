import React, { useEffect, useState } from 'react';

const TasklistNumber = () => {
  const [user, setUser] = useState(null);
  const [taskCounts, setTaskCounts] = useState({
    new: 0,
    accepted: 0,
    completed: 0,
    failed: 0,
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);

      const counts = {
        new: 0,
        accepted: 0,
        completed: 0,
        failed: 0,
      };

      storedUser.tasks.forEach((task) => {
        const status = task.status || 'new';
        if (counts[status] !== undefined) {
          counts[status]++;
        }
      });

      setTaskCounts(counts);
    }
  }, []);

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
      <div className="bg-blue-500 px-6 py-8 rounded-xl text-white shadow-md">
        <h1 className="text-3xl font-bold">{taskCounts.new}</h1>
        <p className="text-lg mt-2">New Task</p>
      </div>

      <div className="bg-yellow-500 px-6 py-8 rounded-xl text-white shadow-md">
        <h1 className="text-3xl font-bold">{taskCounts.accepted}</h1>
        <p className="text-lg mt-2">Accepted Task</p>
      </div>

      <div className="bg-green-500 px-6 py-8 rounded-xl text-white shadow-md">
        <h1 className="text-3xl font-bold">{taskCounts.completed}</h1>
        <p className="text-lg mt-2">Completed Task</p>
      </div>

      <div className="bg-red-500 px-6 py-8 rounded-xl text-white shadow-md">
        <h1 className="text-3xl font-bold">{taskCounts.failed}</h1>
        <p className="text-lg mt-2">Failed Task</p>
      </div>
    </div>
  );
};

export default TasklistNumber;

 
 
 
// import React from 'react'

// const TasklistNumber = () => {
//   return (

   
//     <div className=' flex mt-10 justify-between gap-5 screen'>
//       <div className='bg-blue-500 w-[45%] px-6 py-9 rounded-xl'>
//          <h1 className='text-2xl font-semibold'>2</h1>
//          <h3 className='text-xl font-medium'>New Task</h3>
//       </div>
//       <div className='bg-yellow-500 w-[45%] px-6 py-9 rounded-xl'>
//          <h1 className='text-2xl font-semibold'>1</h1>
//          <h3 className='text-xl font-medium'>Accepted Task</h3>
//       </div>
//       <div className='bg-green-500 w-[45%] px-6 py-9 rounded-xl'>
//          <h1 className='text-2xl font-semibold'>3</h1>
//          <h3 className='text-xl font-medium'>Completed Task</h3>
//       </div>
//       <div className='bg-red-500 w-[45%] px-6 py-9 rounded-xl'>
//          <h1 className='text-2xl font-semibold'>0</h1>
//          <h3 className='text-xl font-medium'>failed Task</h3>
//       </div>
      
//     </div>
//   )
// }

// export default TasklistNumber
