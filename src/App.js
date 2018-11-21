import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


class App extends Component {

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
            <h3>Todo App:</h3>
        </Grid>
        <Grid className="purchase-card">
            <AddTodo />
        </Grid>
        <Grid className="purchase-card">
            <TodoList />
        </Grid>
        <Grid className="purchase-card">
            <Footer />
        </Grid>
      </div>
    );
  }
}

export default App;
