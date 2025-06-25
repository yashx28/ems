import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] =  useState('');
  const [password, setPassword] =  useState('');
  const [name, setName] =  useState('');
  const navigate = useNavigate();

  const handle = () => {
    navigate('/login');
  };

  const SubmitEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ems-api-o1q9.onrender.com/signup', {
        name,
        email,
        password,
      });

      alert(response.data.message);

      if (response.data.message === 'Signup successful') {
        navigate('/login');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Something went wrong');
      }
      console.error(error);
    }

    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-emerald-600 text-white">
        <form onSubmit={SubmitEvent} className="space-y-4">
          <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            required
            className="w-full px-4 py-2 bg-transparent border border-emerald-600 rounded-full outline-none"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
            required
            className="w-full px-4 py-2 bg-transparent border border-emerald-600 rounded-full outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
            required
            className="w-full px-4 py-2 bg-transparent border border-emerald-600 rounded-full outline-none"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 font-semibold py-2 rounded-full transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center items-center gap-2 mt-4 text-sm">
          <p className="text-red-400">Already have an account?</p>
          <button onClick={handle} className="text-blue-500 hover:underline">
            /login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
