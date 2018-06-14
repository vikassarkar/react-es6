import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from "../views/App";

import store from "../store/store";
import { storeInitiate } from "../store/action/Actions";
import Subscriber from "../store/Subscriber"

store.subscribe(Subscriber(store));
console.log(" >>>>> Watching From app >> index.jsx >>>>>");
console.log(store.getState());
store.dispatch(storeInitiate(true));

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));