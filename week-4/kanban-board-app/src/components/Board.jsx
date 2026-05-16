import Column from './Column';

export default function Board({ tasks, deleteTask, editTask }) {
  return (
    <div className="board">
      <Column
        title="Todo"
        columnId="todo"
        tasks={tasks.todo}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <Column
        title="In Progress"
        columnId="inprogress"
        tasks={tasks.inprogress}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <Column
        title="Done"
        columnId="done"
        tasks={tasks.done}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}