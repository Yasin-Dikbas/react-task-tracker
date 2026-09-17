import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  function handleChange(event) {
    setTaskText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (taskText.trim() === "") {
      return;
    }

    onAddTask(taskText);

    setTaskText("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Görevini yaz..."
        value={taskText}
        onChange={handleChange}
      />

      <button className="add-button" type="submit">
        Görev Ekle
      </button>
    </form>
  );
}

export default TaskForm;