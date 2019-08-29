import React from 'react';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.sendTask = this.sendTask.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  sendTask() {
    this.props.sendTask(this.state.value);
    this.setState({value: ""})
  }

  render() {
    return (
      <React.Fragment>
        <label>Task: </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="button" value={"Enviar bottón"} onClick={this.sendTask} />
      </React.Fragment>
    )
  };
}