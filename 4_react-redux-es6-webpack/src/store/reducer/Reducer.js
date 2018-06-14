import { combineReducers } from 'redux'
import DataReducer from './DataReducer';
import NoReactReduxReducer from './NoReactReduxReducer';

const AllReducer = combineReducers({
    DataReducer,
    NoReactReduxReducer
})
//const AllReducer = DataReducer
export default AllReducer;
