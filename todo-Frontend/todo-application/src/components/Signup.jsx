/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            alert('Signup successful');
        } catch (error) {
            alert('Signup failed');
        }
    }

    return (
        <div className='h-screen bg-gray-100 flex justify-center'>
            <div className='py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl'>
        <form onSubmit={handleSubmit}>
        <label className='block text-green-800 font-bold'>Name: </label>
            <input type="text" name="name" placeholder="Name" onChange={handleChange}
             className='max-w-xs w-full' />
        <label className='block text-green-800 font-bold'>Email: </label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} 
            className='max-w-xs w-full' />
        <label className='block text-green-800 font-bold'>Password: </label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange}
            className='max-w-xs w-full' />
            <button type="submit" 
            className='cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded'>Signup</button>
        </form>
        </div>
        </div>
    )
}

export default Signup