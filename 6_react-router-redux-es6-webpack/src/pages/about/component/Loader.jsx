import * as React from 'react';
import { Progress } from 'reactstrap';

export default class Loader extends React.Component {
    render() {
        return (
            <div>
                <div className="text-center">25%</div>
                <Progress value="25" />
            </div>
        );
    }
}