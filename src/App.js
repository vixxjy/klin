import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './App.css';
import AddTodo from './components/AddTodo';
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
    this.completeTask = this.completeTask.bind( this );
  }

  addTask(task) {
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
  }

  deleteTask( id ) {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter( task => task.id !== id ) });
  }

  completeTask( id ) {
    const { tasks } = this.state;
    tasks.find( task => task.id === id ).completed = true;
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
            <h3>Todo App:</h3>
        </Grid>
        <Grid className="purchase-card">
            <AddTodo addTask={ this.addTask } />
        </Grid>
        <Grid className="purchase-card">
            <TodoList 
              tasks={ this.state.tasks} 
              deleteTask={ this.deleteTask } 
              completeTask={this.completeTask} 
            />
        </Grid>
        <Grid className="purchase-card">
            <Footer />
        </Grid>
      </div>
    );
  }
}

export default App;
