import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handle = () => {
    localStorage.removeItem("user");
    navigate('/login');
  };

  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-gray-900 text-white shadow-md rounded-lg">
      <div className="text-left">
        <p className="text-sm sm:text-base">Hello,</p>
        <h1 className="text-2xl sm:text-3xl font-semibold">{user?.name || "Guest"}</h1>
      </div>

      <button
        onClick={handle}
        className="mt-2 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition duration-300"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
