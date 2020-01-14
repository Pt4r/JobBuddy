import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import JobListingForm from './JobListingForm';
import { USERS_API_URL } from '../../Constants';

class JobListingModal extends Component {
    constructor(props) {
        super(props);
    this.state = {
        modal: props.initialModalState
    };
    this.toggle = this.toggle.bind(this);
}
    toggle () {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const isNew = this.props.isNew;

        let title = 'Edit User';
        let button = '';
        if (isNew) {
            title = 'Add User';

            button = <Button
                color="success"
                onClick={this.toggle}
                style={{ minWidth: "200px" }}>Add</Button>;
        } else {
            button = <Button
                color="warning"
                onClick={this.toggle}>Edit</Button>;
        }

        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <JobListingForm
                        addUserToState={this.props.addUserToState}
                        updateUserIntoState={this.props.updateUserIntoState}
                        toggle={this.toggle}
                        user={this.props.user} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
    }
export default JobListingModal;