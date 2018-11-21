import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = ({ tasks }) => {
    let listTasks = '';

    if (tasks.length > 0) {
        const alltasks = tasks;
        listTasks = alltasks.map((task, index) => 
          <Todo key={index} id = {task.id} { ...task } isCompleted = {task.completed} />
        );
    }
    else {
        listTasks = <li className="list-group-item list-group-item-info">No Tasks Yet!!!</li>
    }

  return (
    <div>
        { listTasks }
    </div>
  )
}

function mapStateToProps( state ) {
    return {
      tasks: state.tasks
    }
}

export default connect(mapStateToProps, null)(TodoList);