import "../../assets/images/female_dummy.png";
import "../../assets/images/male_dummy.png";

import React from 'react';
import { Button } from 'react-bootstrap';

export const CardGrid = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card grid-item">
            <div className="thumbnail">
                <img src={"./images/" + props.data.gender + "_dummy.png"} className="card-img" />
                <div className="caption">
                    <h2 id="thumbnail-label">{props.data.name}</h2>
                    <h4> {props.data.email || "N/A"}</h4>
                    <h4> {props.data.address.city || "N/A"}</h4>
                    <h4> {props.data.phone || "N/A"}</h4>
                    <h4> {props.data.website || "N/A"}</h4>
                    <h4> {props.data.company.name || "N/A"}</h4>
                </div>
                <div className="caption card-footer">
                    <Button id={"userid_" + props.id} onClick={props.handleShow} className="btn-userpage" bsStyle="primary" bsSize="large" block>
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    );
}