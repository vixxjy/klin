import { CREATE_TASK, COMPLETE_TASK, DELETE_TASK } from '../actions/type';

const initialState = {
    tasks: [],
    taskId: 0
}

function taskApp(state = initialState, action) {
    switch (action.type) {
        case CREATE_TASK:
            return {
                tasks: [ ...state.tasks, 
                    { id: state.taskId, 
                    task: action.payload, 
                    description: "", 
                    completed: false } 
                ],
                taskId: state.taskId + 1
            }
        case COMPLETE_TASK:
            const { tasks, taskId } = state;
            let i = tasks.findIndex( task => task.id === action.payload );
            return {
                tasks: tasks.slice(0, i)
                        .concat( Object.assign({}, tasks[i], { completed: true }) )
                        .concat( tasks.slice(i + 1, tasks.length) ),
                taskId: taskId
            }
        case DELETE_TASK:
            return {
                tasks: state.tasks.filter( task => task.id !== action.payload ),
                taskId: state.taskId
            }
        default:
          return state
    }
}

export default taskApp;