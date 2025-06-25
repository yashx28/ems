import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllTask = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

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
    <div id="alltask" className="bg-[#1C1C1C] mt-5 p-4 md:p-6 rounded-lg max-w-6xl mx-auto overflow-auto">
      <h1 className="text-2xl font-bold text-white mb-4">All Employees</h1>

      {employees.length === 0 ? (
        <p className="text-gray-300">No employees found.</p>
      ) : (
        <div className="space-y-3">
          {employees.map(emp => (
            <div
              onClick={handle}
              key={emp._id}
              className="bg-gray-700 hover:bg-gray-600 transition flex justify-between items-center text-white px-4 py-3 rounded-lg cursor-pointer"
            >
              <span className="text-lg font-medium">{emp.name}</span>

              <div className="flex gap-2">
                <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm font-semibold">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-semibold">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTask;
