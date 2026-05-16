import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';

export default function Column({ title, tasks, columnId, deleteTask, editTask }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                columnId={columnId}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}