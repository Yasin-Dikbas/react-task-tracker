function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <p className="task-text">{task.text}</p>

        <span className="task-status">
          {task.completed ? "Tamamlandı" : "Aktif"}
        </span>
      </div>

      <div className="task-actions">
        <button
          className="toggle-button"
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? "Aktif Yap" : "Tamamlandı Yap"}
        </button>

        <button
          className="delete-button"
          onClick={() => onDeleteTask(task.id)}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default TaskItem;