import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import CompanyForm from "./CompanyForm.js"


class CompanyModal extends Component {
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

oops=()=> console.log(this.props.company);

    render() {
        const isNew = this.props.isNew;

        let title = 'Edit Company';
        let button = '';
        if (isNew) {
            title = 'Add Company';

            button = <Button
                color="success"
                onClick={this.toggle}
                style={{ minWidth: "200px" }}>Add Company</Button>;
        } else {
            button = <Button
                className="btn-icon btn-round"
                size="sm"
                color="warning"
                onClick= {this.toggle} ><i className="fa fa-edit" />
                </Button>;
        }
        
        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                  <CompanyForm  comp={this.props.company} toggle={this.toggle}  modalState={this.state.modal} getComp={this.props.getCompanies} tableSt={this.props.tableState} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
    }
export default CompanyModal;

//