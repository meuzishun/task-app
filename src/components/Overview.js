import React from 'react';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={task.id}>
            {index + 1}: {task.text} <button>remove</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
