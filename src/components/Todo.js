import React from 'react'

const Todo = ({ id, task, deleteTask, completeTask, isCompleted }) => {
    return (
        <li className="list-group-item list-group-item-success justify-content-between"
            style={{
                textDecoration: isCompleted ? 'line-through' : 'none'
            }}
           key={id}>
            <span className="badge badge-dark">{id + 1}</span>{task}
            <button type="button" onClick={ () => completeTask( id ) } className="btn btn-outline-info" disabled={isCompleted}>Complete</button>
            <button type="button" onClick={ () => deleteTask( id ) } className="btn btn-outline-danger">Delete</button>
        </li>
    )
}

export default Todo;