import { CREATE_TASK, COMPLETE_TASK, DELETE_TASK } from './type';


export function addTask(task) {
    return {
        type: CREATE_TASK,
        payload: task
    }
}

export function completeTask(id) {
    return {
        type: COMPLETE_TASK,
        payload: id
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id
    }
}