/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/tasks',
        { task },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTask('');
      fetchTasks();
    } catch (error) {
      alert('Error adding task');
    }
  };

  return (
    <div className='h-screen bg-gray-100 flex justify-center'>
      <div className='py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className='border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'
      />
      <button type="submit"
       className='cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold text-center rounded'>Add Task</button>
    </form>
    </div>
    </div>
  );
};

export default TaskForm;
