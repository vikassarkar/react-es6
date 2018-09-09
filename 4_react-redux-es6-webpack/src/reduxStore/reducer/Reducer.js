import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'
import FilterReducer from './FilterReducer'

const AllReducer = combineReducers({
    TodoReducer,
    FilterReducer
})

export default AllReducer;
