import * as React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterList from './FilterList';
import Store from "../reduxStore/store/Store";
import { addTodo } from "../reduxStore/action/Actions";

export default class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        };
        this.toggleTodo = this.toggleTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    toggleTodo(index, data) {
        const state = Store.getState().TodoReducer.payload;
        const filterArr = state.filter((content, i) => { return index !== i });
        Store.dispatch(addTodo(filterArr));
        this.setState({ itemList: Store.getState().TodoReducer.payload })
    }

    addTodo(todoInput) {
        const state = Store.getState().TodoReducer.payload;
        state.push(todoInput);
        Store.dispatch(addTodo(state));
        this.setState({ itemList: Store.getState().TodoReducer.payload })
    }
    componentWillMount() {
        this.setState({ itemList: Store.getState().TodoReducer.payload })
    }

    render() {
        return (
            <div className="todoWrapper">
                <AddTodo state={this.state.itemList} addTodo={this.addTodo} />
                <TodoList state={this.state.itemList} toggleTodo={this.toggleTodo} />
                <FilterList state={this.state.itemList} />
            </div>
        )
    }
}