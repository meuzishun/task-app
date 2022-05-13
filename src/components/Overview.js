import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { tasks, onTaskEdit, onEditSubmit, onTaskRemoval } = this.props;

    return (
      <ul>
        {tasks.map((task, index) => {
          return task.edit ? (
            <li key={task.id} id={task.id}>
              {index + 1}: <input type='text' defaultValue={task.text} />
              <button onClick={onEditSubmit}>submit</button>
            </li>
          ) : (
            <li key={task.id} id={task.id}>
              {index + 1}: {task.text}{' '}
              <button onClick={onTaskEdit}>edit</button>
              <button onClick={onTaskRemoval}>remove</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Overview;
