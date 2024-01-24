// src/components/TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  const handleInputChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    onAddTask(taskData);
    setTaskData({ title: '', description: '', dueDate: '' });
  };

  return (
    <div className="form-container">
      <div>
        <h2>Add Task</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={taskData.title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={taskData.description}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="date"
          placeholder="Due Date"
          name="dueDate"
          value={taskData.dueDate}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;
