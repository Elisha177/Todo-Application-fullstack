/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div className='h-screen bg-gray-100 flex justify-center'>
            <div className='py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl'>
        <form onSubmit={handleSubmit}>
            <label className='block text-green-800 font-bold'>Email: </label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange}
             className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600' />
             <label className='block text-green-800 font-bold p-4'>Password: </label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange}
             className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600' />
            <button type="submit" className='cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded'>Login</button>
        </form>
        </div>
        </div>
    );
};

export default Login;
