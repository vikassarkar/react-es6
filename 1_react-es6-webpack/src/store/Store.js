import {createStore} from "redux";
import AllReducer from  "./reducer/Reducer";

const Store = createStore(AllReducer);

export default Store;