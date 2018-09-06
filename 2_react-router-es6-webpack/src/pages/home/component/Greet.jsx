import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class Greet extends React.Component {
    render() {
        const { match } = this.props;
        const techs = this.props.techs.map((tech, i) => {
            return <ListGroupItem key={i} color="info">{tech}</ListGroupItem>
        });
        console.log(match);

        return (
            <div className="widget">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1> Welcome to our HOME </h1>
                            <h2><i className="fab fa-react"></i>React Typescript app</h2>
                            <h2>This app has been built using below Awsome person </h2>
                            <ListGroup>{techs}</ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}