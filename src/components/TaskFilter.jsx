function TaskFilter({ setFilter }) {
  return (
    <div className="task-filter">
      <button onClick={() => setFilter("all")}>
        Tümü
      </button>

      <button onClick={() => setFilter("active")}>
        Aktif
      </button>

      <button onClick={() => setFilter("completed")}>
        Tamamlandı
      </button>
    </div>
  );
}

export default TaskFilter;