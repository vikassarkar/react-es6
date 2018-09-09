import "./assets/scss/module1.scss"

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Store from "./reduxStore/store/Store"
import Subscriber from "./reduxStore/store/Subscriber"
import Widget from './component/widget';
import { storeInitiate, addTodo } from "./reduxStore/action/Actions";

Store.subscribe(Subscriber(Store));
console.log(Store.getState());
Store.dispatch(storeInitiate(true));
Store.dispatch(addTodo(["some@thing.com", "omg@god.com", "cool@dude.com"]));

ReactDOM.render(
    <div className="TodoApp">
        <div className="container pb-3 pt-3 mt-5 mb-5" style={{ border: "1px solid rgba(0, 0, 0, 0.125)" }}>
            <Widget />
        </div>
    </div>,
    document.getElementById('app')
);