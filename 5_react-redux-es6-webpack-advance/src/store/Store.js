import {createStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import AllReducer from  "./reducer/Reducer";

//const Store = createStore(AllReducer);

const Store = createStore(AllReducer, devToolsEnhancer({
	// options like actionSanitizer, stateSanitizer
}));

export default Store;