import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const tasksElements = this.props.tasks.map((task, index) => (
      <p key={index}>{task}</p>
    ));
    return <div className='overview'>{tasksElements}</div>;
  }
}

export default Overview;
