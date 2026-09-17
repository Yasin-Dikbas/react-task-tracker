function TaskStats({ totalTasks, activeTasks, completedTasks }) {
  return (
    <div className="task-stats">
      <p>
        Toplam
        <strong>{totalTasks}</strong>
      </p>

      <p>
        Aktif
        <strong>{activeTasks}</strong>
      </p>

      <p>
        Tamamlandı
        <strong>{completedTasks}</strong>
      </p>
    </div>
  );
}

export default TaskStats;