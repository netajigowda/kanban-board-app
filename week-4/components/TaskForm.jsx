export default function TaskForm({ taskText, setTaskText, addTask }) {
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter a task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}