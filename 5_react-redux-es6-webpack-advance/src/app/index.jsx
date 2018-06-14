import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from "../views/App";

import Store from "../store/Store";
import { storeInitiate } from "../store/action/Actions";
import Subscriber from "../store/Subscriber"

Store.subscribe(Subscriber(Store));
console.log(" >>>>> From app >> index.jsx >>>>>");
console.log(Store.getState());
Store.dispatch(storeInitiate(true));

render(
    <Provider store={Store}>
        <App />
    </Provider>, document.getElementById('root'));