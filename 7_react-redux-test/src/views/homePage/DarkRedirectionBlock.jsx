
import React from 'react';
import { Button } from 'react-bootstrap';

export const DarkRedirectionBlock = (props) => {

    return (
        <div className="more-redirector container">
            <div className="dark-container">
                <span className="date-text">Upcoming event on this APRIL - 10th</span><br />
                <span className="description-text">Organizers detail below</span>
            </div>
            <div className="redirection-btn">
                <Button className="btn-userpage" bsStyle="primary" bsSize="large" onClick={props.toggleUserpage}>Go to Userpage</Button>
            </div>
        </div>
    );
}