import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label htmlFor='taskInput'>Enter task</label>
          <input onChange={this.handleChange} type='text' id='taskInput' />
          <button type='submit'>Add Task</button>
        </form>
      </div>
    );
  }
}

export default App;
