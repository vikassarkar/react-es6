
import "../../assets/images/ostend_beach_Home_62003.jpg";

import React from 'react';
import { Button } from 'react-bootstrap';

export const ScreenBanner = (props) => {

    return (
        <div className="banner-widget">
            <div className="screen-banner">
                <img src={"./images/ostend_beach_Home_62003.jpg"} />
            </div>
            <div className="screen-content-bg">
                <div className="screen-content-box">
                    <span>Welcome to this website </span><br />
                    <span>please click below button to view user Profiles.</span><br />
                    <div className="redirection-btn">
                        <Button className="btn-userpage" bsStyle="primary" bsSize="large" onClick={props.toggleUserpage}>Redirect to Userpage</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}