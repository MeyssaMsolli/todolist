import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { Notes } from '@mui/icons-material';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks); // Assuming you have a tasks array in your Redux state

  const [filter, setFilter] = useState('all'); // 'all', 'done', or 'not_done'

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') {
      return task.isDone;
    } else if (filter === 'not_done') {
      return !task.isDone;
    }
    return true; // 'all'
  });

  return (
    <div>
      <div>
        {/* Task filtering buttons */}
      </div>
      <div>
        <h2>Tasks</h2>
        <ul>
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </div>
      <div>
        <h2>Notes</h2>
        {Notes.map((note) => (
          <note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};




export default ListTask;
