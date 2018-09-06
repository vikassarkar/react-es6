import * as React from 'react';
import { ListGroup, ListGroupItem, Table } from 'reactstrap';
import { Link, Route } from 'react-router-dom';


export default class Greet extends React.Component {

    constructor(props) {
        super(props);

    }
    getResponsiveTable() {
        // getResponsiveTable(props:any) { you can get props here
        return (
            <div style={{ marginBottom: 30, padding: 5 }}>
                <h2>Responsive Table</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
    render() {
        const techs = this.props.techs.map((tech, i) => {
            return <ListGroupItem key={i} color="info">{tech}</ListGroupItem>
        })
        let { match } = this.props;

        return (
            <div className="widget">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1> Welcome to our CONTACT </h1>
                            <h2><i className="fab fa-react"></i>React Typescript app</h2>
                            <h2>This app has been built using below Awsome person </h2>
                            <ListGroup>{techs}</ListGroup>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li><Link to={`${match.url}/loader/table`} replace>Table</Link></li>
                            </ul>
                            {/* if   path={`${match.url}/:loader?/:table?`}  then component define will load by default without even clicking link*/}
                            <Route path={`${match.url}/:loader/:table`} render={this.getResponsiveTable} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}