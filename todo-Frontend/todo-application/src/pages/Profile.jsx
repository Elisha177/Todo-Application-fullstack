/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current user profile
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile({
          name: response.data.name,
          email: response.data.email,
          password: '', // Password should not be prefilled
        });
        setLoading(false);
      } catch (error) {
        alert('Error fetching profile');
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/profile`,
        {
          name: profile.name,
          email: profile.email,
          password: profile.password,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Profile updated successfully');
    } catch (error) {
      alert('Error updating profile');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='h-screen bg-gray-100 flex justify-center'>
      <div className='py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange}
         className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600' />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={profile.email} onChange={handleChange} 
        className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600' />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          name="password"
          value={profile.password}
          onChange={handleChange}
          placeholder="password change"
          className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
        />
      </div>
      <button type="submit" className='cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded'>Update Profile</button>
    </form>
    </div>
    </div>
  );
};

export default Profile;
