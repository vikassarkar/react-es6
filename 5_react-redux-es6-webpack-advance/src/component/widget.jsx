import * as React from 'react';
import { connect } from "react-redux";
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterList from './FilterList';
import { addTodo } from "../reduxStore/action/Actions";

export class WidgetHandler extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    toggleTodo(index, data) {
        const state = this.props.todoArr.payload;
        const filterArr = state.filter((content, i) => { return index !== i });
        this.props.addTodoAction(filterArr);
    }

    addTodo(todoInput) {
        let state = this.props.todoArr.payload;
        state.push(todoInput);
        this.props.addTodoAction(state);
    }

    render() {
        const itemList = this.props.todoArr.payload
        return (
            <div className="todoWrapper">
                <AddTodo state={itemList} addTodo={this.addTodo} />
                <TodoList state={itemList} toggleTodo={this.toggleTodo} />
                <FilterList state={itemList} />
            </div>
        )
    }
}



const Widget = connect(
    (state) => {
        return { todoArr: state.TodoReducer };
    }, // Map store state to props
    (dispatch) => {
        return {
            addTodoAction: (data) => {
                dispatch(addTodo(data));
            }
        };// Map store actions to props
    })(WidgetHandler);

export default Widget;