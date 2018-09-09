import {createStore} from "redux";
import AllReducer from  "../reducer/Reducer";

const Store = createStore(AllReducer, {"TodoReducer":{status:"started"}, "FilterReducer":{status:"started"}});//second param is initial default state value

export default Store;