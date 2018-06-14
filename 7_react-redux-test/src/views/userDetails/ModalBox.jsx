import React from 'react';
import { Button, Modal, Form, FormGroup, Col, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export const ModalBox = (props) => {

    return (
        <Modal
            show={props.show}
            onHide={props.handleHide}
            aria-labelledby="contained-modal-title">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                    Contained Modal
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup >
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" autoComplete='name' name="name" value={props.selectedData.data.name} onChange={props.updateChange} />
                    </FormGroup>
                    <FormGroup >
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="text" autoComplete='email' name="email" value={props.selectedData.data.email} onChange={props.updateChange} />
                    </FormGroup>
                    <FormGroup >
                        <ControlLabel>City</ControlLabel>
                        <FormControl type="text" autoComplete='address.city' name="address.city" value={props.selectedData.data.address.city} onChange={props.updateChange} />
                    </FormGroup>
                    <FormGroup >
                        <ControlLabel>Website</ControlLabel>
                        <FormControl type="text" autoComplete='website' name="website" value={props.selectedData.data.website} onChange={props.updateChange} />
                    </FormGroup>
                    <FormGroup >
                        <ControlLabel>Company Name</ControlLabel>
                        <FormControl type="text" autoComplete='company.name' name="company.name" value={props.selectedData.data.company.name} onChange={props.updateChange} />
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.updateData}>Save</Button>
                <Button onClick={props.handleHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}