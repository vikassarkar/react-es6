import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { setData, updateLightbox } from "../../store/action/Actions";

import { CardGrid } from "./CardGrid";
import { ModalBox } from "./ModalBox";
import { ErrorNotification } from "./ErrorNotification";

class UserDetailsHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateChange = this.updateChange.bind(this);
    }
    async getJSONAsync() {
        let json = await axios.get('../mocks/ReactTask.json');
        return json;
    }

    componentWillMount() {
        let component = this;
        this.getJSONAsync().then((response) => {
            component.props.setDataAction(response.data);
        });
    }
    hideModal(event) {
        this.setState({ show: false });
    }

    showModal(event) {
        this.setState({ show: true });
        let index = parseInt(event.target.id.split("_")[1] - 1);
        let data = this.props.userData.data[index];
        this.props.updateLightboxAction(data);
    }

    updateData(event) {
        let index = parseInt(this.props.selectedUserData.data.id) - 1;      
        let data  = this.props.userData.data; 
        data[index] = this.props.selectedUserData.data;        
        this.props.setDataAction(data)
        this.hideModal();
    }
    updateChange(event) {
        let data = this.props.selectedUserData.data;
        let name= event.target.name; 
        
        if(name.split(".") && name.split(".")[1]){
            data[name.split(".")[0]][name.split(".")[1]] = event.target.value;
        } else {
            data[event.target.name] = event.target.value;
        }
        
        this.props.updateLightboxAction(data);
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row grid">
                    {this.props.userData.data && this.props.userData.data.length > 0 &&

                        this.props.userData.data.map((item, i) =>
                            <CardGrid key={i} id={item.id} data={item} show={this.state.show} handleHide={this.hideModal} handleShow={this.showModal}/>
                        )
                    }
                    {this.props.selectedUserData && this.props.selectedUserData.data &&
                        <ModalBox show={this.state.show} handleHide={this.hideModal} selectedData={this.props.selectedUserData} updateData={this.updateData} updateChange={this.updateChange}/>
                    }
                    {this.props.userData.data && this.props.userData.data.length === 0 &&
                        <ErrorNotification />
                    }
                </div >
                <div className="redirection-btn">
                    <Button className="btn-userpage" bsStyle="primary" bsSize="large" onClick={this.props.toggleUserpage}>Redirect to Home</Button>
                </div>
            </div >

        );

    }
}


const UserDetails = connect(
    (state) => {
        return { userData:state.DataReducer.SET_DATA,
            selectedUserData: state.DataReducer.UPDATE_LIGHTBOX
         };
    }, // Map store state to props
    (dispatch) => {
        return {
            setDataAction: (data) => {
                dispatch(setData(data));
            },
            updateLightboxAction:(data)=>{
                dispatch(updateLightbox(data));
            }
        };// Map store actions to props
    })(UserDetailsHandler);

export default UserDetails;