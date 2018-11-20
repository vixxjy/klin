import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskId: 0
    }

    this.addTask = this.addTask.bind( this );
    this.deleteTask = this.deleteTask.bind( this );
  }

  addTask(task) {
    // console.log("task", task);
    const { tasks, taskId } = this.state;
    this.setState({
      tasks: [
        ...tasks,
        {
          id: taskId,
          task,
          completed: false
        }
      ],
      taskId: taskId + 1
    })
    console.log(this.state.tasks + " " + this.state.taskId);
  }

  deleteTask( id ) {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter( task => task.id !== id ) });
  }

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
            <h3>Todo App:</h3>
        </Grid>
        <Grid className="purchase-card">
            <Todo addTask={ this.addTask } />
        </Grid>
        <Grid className="purchase-card">
            <TodoList tasks={ this.state.tasks} deleteTask={ this.deleteTask }/>
        </Grid>
        <Grid className="purchase-card">
            <Footer />
        </Grid>
      </div>
    );
  }
}

export default App;
