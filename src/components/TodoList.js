import React from 'react'

const TodoList = ({ tasks, deleteTask }) => {
    let listTasks = '';
    if (tasks.length > 0) {
        const alltasks = tasks;
        listTasks = alltasks.map((task) =>
            <li className="list-group-item active justify-content-between" key={task.id}>
            <span className="badge badge-dark">{task.id + 1}</span>{task.task}
            <span className="badge badge-success badge-pill">Complete</span>
            <span className="badge badge-danger badge-pill">Delete</span>
            </li>
        );
    }
    else {
        listTasks = <li className="list-group-item list-group-item-info">No Tasks Yet!!!</li>
    }

  return (
    <div>
      <ul className="list-group">
        {listTasks}
      </ul>
    </div>
  )
}

export default TodoList;