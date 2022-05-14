import React, { Component } from 'react';

function EditListItem(props) {
  return (
    <li id={props.task.id}>
      {props.index + 1}:
      <input type='text' defaultValue={props.task.text} />
      <button onClick={props.onEditSubmit}>submit</button>
    </li>
  );
}

function ListItem(props) {
  return (
    <li id={props.task.id}>
      {props.index + 1}: {props.task.text}
      <button onClick={props.onTaskEdit}>edit</button>
      <button onClick={props.onTaskRemoval}>remove</button>
    </li>
  );
}

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
            <EditListItem
              key={task.id}
              task={task}
              index={index}
              onEditSubmit={onEditSubmit}
            />
          ) : (
            <ListItem
              key={task.id}
              task={task}
              index={index}
              onTaskEdit={onTaskEdit}
              onTaskRemoval={onTaskRemoval}
            />
          );
        })}
      </ul>
    );
  }
}

export default Overview;
