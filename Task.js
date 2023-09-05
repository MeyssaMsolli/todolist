import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = (newDescription) => {
    dispatch(editTask(task.id, newDescription));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      <input
        type="text"
        value={task.description}
        onChange={(e) => handleEditTask(e.target.value)}
      />
    </li>
  );
};

export default Task;

