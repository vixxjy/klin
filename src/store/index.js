import { createStore } from 'redux'
import taskApp from '../reducers'

const store = createStore(taskApp);

export default store;