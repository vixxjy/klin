import React from 'react';
import Todo from './Todo';

const TodoList = ({ tasks, deleteTask, completeTask }) => {
    let listTasks = '';

    if (tasks.length > 0) {
        const alltasks = tasks;
        listTasks = alltasks.map((task, index) => 
          <Todo key={index} id = {task.id} { ...task } isCompleted = {task.completed} 
          deleteTask={deleteTask} completeTask={completeTask} />
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

export default TodoList;