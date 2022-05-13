import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick = (e) => {
    console.log(e);
  };

  render() {
    const { tasks, onTaskRemoval } = this.props;

    return (
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={task.id} id={task.id}>
              {index + 1}: {task.text}{' '}
              <button onClick={this.handleEditClick}>edit</button>
              <button onClick={onTaskRemoval}>remove</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Overview;
