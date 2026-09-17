import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="task-list">
      <h2>Görevler</h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      ))}
    </div>
  );
}

export default TaskList;