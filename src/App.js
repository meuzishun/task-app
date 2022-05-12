import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      value: '',
      tasks: [...this.state.tasks, this.state.value],
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
