import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] =  useState('');
  const [password, setPassword] =  useState('');
  const navigate = useNavigate();

  const handle = () => {
    navigate('/signup');
  };

  const SubmitEvent = (e) => {
    e.preventDefault();
    axios.post('https://ems-api-o1q9.onrender.com/login', { email, password })
      .then(result => {
        console.log(result);
        if (email === "admin@gmail.com") {
          localStorage.setItem("user", JSON.stringify(result.data.user));
          navigate('/AdminDashborad');
        } else if (result.data.status === "success") {
          alert('Successful Login');
          localStorage.setItem("user", JSON.stringify(result.data.user));
          navigate('/EmployeeDashboard');
        }
      })
      .catch(error => console.log(error));

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-emerald-600 text-white">
        <form onSubmit={SubmitEvent} className="space-y-4">
          <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-emerald-600 rounded-full outline-none"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-emerald-600 rounded-full outline-none"
            placeholder="Enter Your Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-full transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center items-center gap-2 mt-4 text-sm">
          <p className="text-red-400">Create Account.</p>
          <button onClick={handle} className="text-blue-500 hover:underline">
            /Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
