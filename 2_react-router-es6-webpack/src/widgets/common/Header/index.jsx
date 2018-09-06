import * as React from 'react';
import '../../../assets/images/logo.png';
import { Button } from 'reactstrap';


export default class Header extends React.PureComponent {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="widget">
                <div className=" row btn-primary no-gutters" style={{ alignItems: 'center' }}>
                    <div className="col-1 text-right" >
                        <Button onClick={this.props.toggleMenu}>
                            <i className="fas fa-bars" style={{ cursor: "pointer" }} ></i>
                        </Button>
                    </div>
                    <div className="col-2" style={{paddingTop:"5px"}}>
                        <img src={"./assets/images/logo.png"} style={{ width: "50%" }} />
                    </div>
                    <div className="col-9">
                        <h2>{this.props.headerTitle}</h2>
                    </div>
                </div>
            </div>
        );
    }
}