import * as React from 'react';
import { Button } from 'reactstrap';


export default class FilterList extends React.Component {
    constructor(props) {
        super(props);
        this.showTodo = this.showTodo.bind(this);
    }
    showTodo(event) {
        alert("show : "+event.target.name);
    }
    render() {
        return (
            <div className="addTodo">
                <div className="row">
                    <div className="col-12 no-gutters form-inline">
                        <div className="col-12 col-sm-3 mb-3">
                            <strong>Show:</strong>
                        </div>
                        <div className="col-12 col-sm-3 mb-3">
                            <Button name="1" onClick={this.showTodo} className="col-sm-10 float-right">All</Button>
                        </div>
                        <div className="col-12 col-sm-3 mb-3">
                            <Button name="2" onClick={this.showTodo} className="col-sm-10 float-right">Active</Button>
                        </div>
                        <div className="col-12 col-sm-3 mb-3">
                            <Button name="3" onClick={this.showTodo} className="col-sm-10 float-right">Complete</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}