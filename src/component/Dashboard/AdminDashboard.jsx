import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white px-4 py-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <Header />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
