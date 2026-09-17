import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import TaskStats from "./components/TaskStats";

function App() {

   const [tasks, setTasks] = useState([]);
   const [filter, setFilter] = useState("all");

    function handleAddTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

  function handleToggleTask(id) {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

// BURAYA
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return task.completed === false;
    }

    if (filter === "completed") {
      return task.completed === true;
    }
    return true;
  });

  const totalTasks = tasks.length;

    const activeTasks = tasks.filter((task) => {
    return task.completed === false;
    }).length;

    const completedTasks = tasks.filter((task) => {
    return task.completed === true;
    }).length;

    function handleClearTasks() {
    setTasks([]);
    }

   return (
  <div className="app-container">
      <h1 className="app-title">Task Tracker</h1>

      <TaskForm onAddTask={handleAddTask} />

      <TaskFilter setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
      <TaskStats totalTasks={totalTasks}  activeTasks={activeTasks} completedTasks={completedTasks} />
     {tasks.length > 0 && ( <button className="clear-button" onClick={handleClearTasks}>   Tüm Görevleri Temizle </button>
)}
    </div>
  );
}

export default App;