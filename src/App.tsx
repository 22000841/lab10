import React, { useState } from 'react';

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  
  // Función para agregar una nueva tarea
  const addTask = (taskContent) => {
    setTasks([...tasks, taskContent]);
  };

  // Función para eliminar una tarea individual
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Función para eliminar todas las tareas
  const deleteAllTasks = () => {
    setTasks([]);
  };

  // Contador de tareas
  const taskCount = tasks.length;

  return (
    <div>
      <h1>Task Manager</h1>
      <p>{taskCount === 0 ? "No hay tareas pendientes" : `${taskCount} tareas pendientes`}</p>
      <input
        type="text"
        placeholder="Enter task"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <button onClick={deleteAllTasks}>Eliminar todas</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;
