
import React from 'react';
import { Button } from 'react-bootstrap';

export const LightRedirectionBlock = (props) => {

    return (
        <div className="user-redirector container">
            <div className="redirection-text">
                <span>Detail of party organizers is just one click away!!!!</span>
            </div>
            <div className="redirection-btn">
                <Button className="btn-userpage" bsStyle="primary" bsSize="large" onClick={props.toggleUserpage}>Redirect to Userpage</Button>
            </div>
        </div>
    );
}