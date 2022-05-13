import React from 'react';

const Overview = (props) => {
  const { tasks, onTaskRemoval } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={task.id} id={task.id}>
            {index + 1}: {task.text} <button>edit</button>
            <button onClick={onTaskRemoval}>remove</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
