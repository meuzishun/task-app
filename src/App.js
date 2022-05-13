import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        edit: false,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        edit: false,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        edit: false,
      },
    });
  };

  onTaskEdit = (e) => {
    const key = e.target.parentElement.id;
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === key) {
          task.edit = true;
        }
        return task;
      }),
    });
  };

  onEditSubmit = (e) => {
    const key = e.target.parentElement.id;
    const text = e.target.previousSibling.value;
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === key) {
          task.edit = false;
          task.text = text;
        }
        return task;
      }),
    });
  };

  onTaskRemoval = (e) => {
    const key = e.target.parentElement.id;
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== key),
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview
          tasks={tasks}
          onTaskEdit={this.onTaskEdit}
          onEditSubmit={this.onEditSubmit}
          onTaskRemoval={this.onTaskRemoval}
        />
      </div>
    );
  }
}

export default App;
