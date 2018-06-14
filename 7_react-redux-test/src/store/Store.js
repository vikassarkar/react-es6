import {createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer  } from 'redux-devtools-extension';
import AllReducer from  "./reducer/Reducer";


const enhancer = devToolsEnhancer ()
const store = createStore(AllReducer, enhancer);

export default store;