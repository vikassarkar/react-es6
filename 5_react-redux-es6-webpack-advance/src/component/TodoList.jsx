import * as React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(index, data) {
        this.props.toggleTodo(index, data);
    }

    render() {
        const { state } = this.props;
        return (
            <div className="todoList mb-5">
                <ListGroup>
                    {state && state.length > 0 &&
                        state.map((data, index) => {
                            return (
                                <ListGroupItem>
                                    <span>{data}</span>
                                    <Button className="float-right" onClick={() => this.deleteTodo(index, data)}>X</Button>
                                </ListGroupItem>
                            )
                        })}
                </ListGroup>
            </div>
        )
    }
}