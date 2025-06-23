import React, { useState, useEffect } from 'react';

const Tasklist = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const updateTaskStatus = (index, newStatus) => {
    const updatedUser = { ...user };
    updatedUser.tasks[index].status = newStatus;

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const getCardColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'accepted': return 'bg-yellow-500';
      case 'completed': return 'bg-green-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div id='tasklist' className='flex h-[50%] mt-10 overflow-x-auto gap-3'>
      {user && user.tasks && user.tasks.length > 0 ? (
        user.tasks.map((task, index) => (
          <div key={index} className={`flex-shrink-0 w-[350px] rounded-xl ${getCardColor(task.status)}`}>
            <div className='flex justify-between p-4'>
              <h5 className='bg-red-500 rounded px-2 text-sm capitalize'>High</h5>
              <p className='text-sm'>{task.dueDate}</p>
            </div>
            <h2 className='text-lg ml-4 font-semibold'>{task.title}</h2>
            <p className='text-sm ml-4 mb-2'>{task.description}</p>

            {/* Dynamic Buttons */}
            <div className='ml-4 mb-4'>
              {task.status === 'new' && (
                <button
                  onClick={() => updateTaskStatus(index, 'accepted')}
                  className='bg-white text-black px-3 py-1 rounded'
                >
                  Accept Task
                </button>
              )}
              {task.status === 'accepted' && (
                <>
                  <button
                    onClick={() => updateTaskStatus(index, 'completed')}
                    className='bg-white text-black px-3 py-1 rounded mr-2'
                  >
                    Complete Task
                  </button>
                  <button
                    onClick={() => updateTaskStatus(index, 'failed')}
                    className='bg-white text-black px-3 py-1 rounded'
                  >
                    Fail Task
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className='text-white ml-4'>No tasks assigned yet.</p>
      )}
    </div>
  );
};

export default Tasklist;



// import React from 'react'
// import { useState,useEffect } from 'react';
// const Tasklist = () => {
//    const [user, setUser] = useState('');

// useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);
//   return (
//     <div id='tasklist' className='flex h-[50%] mt-10 overflow-x-auto gap-3 ' >
//         <div className=' flex-shrink-0 bg-blue-500 w-[350px] rounded-xl '>
//           <div className='flex justify-between p-4'>
//               <h5 className='bg-red-500 rounded px-2  text-sm'>High</h5>
//             <p className='text-sm'>24 feb 2034</p>
//             </div>
//             <h2 className='text-lg ml-4 font-semibold'>{}</h2>
//             <p className='text-sm ml-4 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos cupiditate ratione numquam aut! Doloribus.</p>
//         </div>
//         <div className=' flex-shrink-0 bg-red-500 w-[350px] rounded-xl '>
//           <div className='flex justify-between p-4'>
//               <h5 className='bg-red-500 rounded px-2  text-sm'>High</h5>
//             <p className='text-sm'>24 feb 2034</p>
//             </div>
//             <h2 className='text-lg ml-4 font-semibold'>Make a Youtube Vedio</h2>
//             <p className='text-sm ml-4 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos cupiditate ratione numquam aut! Doloribus.</p>
//         </div>
//         <div className=' flex-shrink-0 bg-yellow-500 w-[350px] rounded-xl '>
//           <div className='flex justify-between p-4'>
//               <h5 className='bg-red-500 rounded px-2  text-sm'>High</h5>
//             <p className='text-sm'>24 feb 2034</p>
//             </div>
//             <h2 className='text-lg ml-4 font-semibold'>Make a Youtube Vedio</h2>
//             <p className='text-sm ml-4 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos cupiditate ratione numquam aut! Doloribus.</p>
//         </div>
//         <div className=' flex-shrink-0 bg-green-500 w-[350px] rounded-xl '>
//           <div className='flex justify-between p-4'>
//               <h5 className='bg-red-500 rounded px-2  text-sm'>High</h5>
//             <p className='text-sm'>24 feb 2034</p>
//             </div>
//             <h2 className='text-lg ml-4 font-semibold'>Make a Youtube Vedio</h2>
//             <p className='text-sm ml-4 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos cupiditate ratione numquam aut! Doloribus.</p>
//         </div>
      
     
      
//     </div>
//   )
// }

// export default Tasklist
