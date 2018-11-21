import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      taskError: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({task: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { task } = this.state;
    
    if (task.length > 0) {
      this.props.addTask(task);
      this.setState({ task: '' });
    }else{
      this.setState({ taskError: `Task Field Can't Be Empty !!!` });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label>Add Task</label>
            <input type="text" name="task" value={this.state.task} onChange={this.handleChange} className="form-control" placeholder="Enter Todo Task" />
            <small className="form-text text-danger">{ this.state.taskError }</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

AddTodo = connect(null, { addTask })(AddTodo);

export default AddTodo;