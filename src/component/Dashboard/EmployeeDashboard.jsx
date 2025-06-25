import React, { useEffect } from 'react';
import Header from '../other/Header';
import TasklistNumber from '../other/TasklistNumber';
import Tasklist from '../Tasklist/Tasklist';
import { getUserData } from '../../utils/localStorage';

const EmployeeDashboard = () => {
  const user = getUserData();

  useEffect(() => {
    console.log("Logged in user data:", user);
  }, [user]);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white px-4 py-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <Header user={user} />
        <TasklistNumber />
        <Tasklist />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
