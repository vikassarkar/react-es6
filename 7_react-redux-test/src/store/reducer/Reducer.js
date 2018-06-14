import { combineReducers } from 'redux';
import DataReducer from './DataReducer';


const AllReducer = combineReducers(
    { DataReducer }
)
//const AllReducer = DataReducer
export default AllReducer;
