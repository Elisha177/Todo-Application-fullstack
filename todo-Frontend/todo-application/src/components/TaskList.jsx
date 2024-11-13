/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>{task.task}</li>
      ))}
    </ul>
  );
};

export default TaskList;
