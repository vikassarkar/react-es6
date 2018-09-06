import * as React from 'react';
import { Progress } from 'reactstrap';


export default class Loader extends React.Component {
    render() {

        return (
            <div style={{ marginBottom: 30, padding: 5 }}>
                <h2>Responsive Loader</h2>
                <div className="text-center">25%</div>
                <Progress value="25" />
            </div>
        );
    }
}