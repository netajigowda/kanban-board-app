import { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';

export default function TaskCard({ task, index, columnId, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {editing ? (
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <p>{task.text}</p>
          )}

          <div className="task-actions">
            {editing ? (
              <button
                onClick={() => {
                  editTask(columnId, task.id, newText);
                  setEditing(false);
                }}
              >
                Save
              </button>
            ) : (
              <button onClick={() => setEditing(true)}>Edit</button>
            )}

            <button onClick={() => deleteTask(columnId, task.id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}