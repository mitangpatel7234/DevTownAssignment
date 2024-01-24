// src/App.js
import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const registerUser = (userData) => {
    setUser(userData);
  };

  const loginUser = (loginData) => {
    setUser(loginData);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <TaskForm onAddTask={addTask} />
          {/* Display tasks here */}
        </div>
      ) : (
        <div className="form-container">
          <RegistrationForm onRegister={registerUser} />
          <LoginForm onLogin={loginUser} />
        </div>
      )}
    </div>
  );
};

export default App;
