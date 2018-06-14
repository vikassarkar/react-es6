
import React from 'react';
import { Button } from 'react-bootstrap';

export const LightRedirectionBlock = (props) => {

    return (
        <div className="user-redirector container">
            <div className="redirection-text">
                <span>119 days 04 hr 17 mins <span className="sec">41</span>sec</span>
            </div>
            <div className="redirection-btn">
                <Button className="btn-userpage" bsStyle="primary" bsSize="large" onClick={props.toggleUserpage}>Redirect to Userpage</Button>
            </div>
        </div>
    );
}