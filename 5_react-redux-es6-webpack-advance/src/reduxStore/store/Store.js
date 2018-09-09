import { createStore } from "redux";
import AllReducer from "../reducer/Reducer";

const Store = createStore(AllReducer);//second param is initial default state value

export default Store;