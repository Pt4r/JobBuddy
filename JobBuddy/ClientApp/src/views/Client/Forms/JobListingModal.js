import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import JobListingForm from './JobListingForm';


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

        let title = 'Edit Job Listing';
        let button = '';
        if (isNew) {
            title = 'Add Job Listing';

            button = <Button
                color="success"
                onClick={this.toggle}
                style={{ minWidth: "200px" }}>Add</Button>;
        } else {
            button = <Button
                className="btn-icon btn-round"
                size="sm"
                color="warning"
                onClick={this.toggle}><i className="fa fa-edit" />
                </Button>;
        }

        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <JobListingForm  jl={this.props.jl} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
    }
export default JobListingModal;