import { useEffect, useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Board from '../components/Board';
import TaskForm from '../components/TaskForm';

const defaultData = {
  todo: [],
  inprogress: [],
  done: []
};

export default function BoardPage() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('kanbanTasks');
    return saved ? JSON.parse(saved) : defaultData;
  });

  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      text: taskText
    };

    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask]
    });

    setTaskText('');
  };

  const deleteTask = (columnId, taskId) => {
    setTasks({
      ...tasks,
      [columnId]: tasks[columnId].filter(task => task.id !== taskId)
    });
  };

  const editTask = (columnId, taskId, newText) => {
    setTasks({
      ...tasks,
      [columnId]: tasks[columnId].map(task =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceCol = result.source.droppableId;
    const destCol = result.destination.droppableId;

    const sourceItems = [...tasks[sourceCol]];
    const destItems = [...tasks[destCol]];

    const [movedItem] = sourceItems.splice(result.source.index, 1);

    if (sourceCol === destCol) {
      sourceItems.splice(result.destination.index, 0, movedItem);

      setTasks({
        ...tasks,
        [sourceCol]: sourceItems
      });
    } else {
      destItems.splice(result.destination.index, 0, movedItem);

      setTasks({
        ...tasks,
        [sourceCol]: sourceItems,
        [destCol]: destItems
      });
    }
  };

  return (
    <div className="page">
      <TaskForm
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={addTask}
      />

      <DragDropContext onDragEnd={onDragEnd}>
        <Board
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </DragDropContext>
    </div>
  );
}