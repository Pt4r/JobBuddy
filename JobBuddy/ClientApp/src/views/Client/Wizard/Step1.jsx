/*!

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

// core components
import PictureUpload from "components/CustomUpload/PictureUpload.jsx";

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: "",
      Details: "",
      jobCategory: "",
      firstnameState: "",
      lastnameState: "",
      emailState: ""
    };
    this.jobTitleChange = this.jobTitleChange.bind(this);
  }
  jobTitleChange(e) {
    this.setState({
      jobTitle: e.target.value
    });
    if (e.target.value.length > 2) {
      this.setState({
        firstnameState: " has-success"
      });
    } else {
      this.setState({
        firstnameState: " has-danger"
      });
    }
  }
  DetailsChange(e) {
    this.setState({
      lastname: e.target.value
    });
    if (e.target.value.length > 2) {
      this.setState({
        lastnameState: " has-success"
      });
    } else {
      this.setState({
        lastnameState: " has-danger"
      });
    }
  }
  emailChange(e) {
    this.setState({
      email: e.target.value
    });
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(e.target.value)) {
      this.setState({
        emailState: " has-success"
      });
    } else {
      this.setState({
        emailState: " has-danger"
      });
    }
  }

  //will not use probably
  isValidated() {
    if (
      this.state.firstnameState !== " has-success" ||
      this.state.lastnameState !== " has-success" ||
      this.state.emailState !== " has-success"
    ) {
      this.setState({
        firstnameState: " has-danger",
        lastnameState: " has-danger",
        emailState: " has-danger"
      });
      return false;
    }
    return true;
  }


  render() {
    return (
      <>
        <h5 className="info-text">
          {" "}
          Let's start with writing about the job you are interested in 
        </h5>
        <Row className="justify-content-center">
          <Col xs={12} sm="4">
          </Col>
          <Col xs={12} sm="6">
            <InputGroup
              className={
                "form-control-lg" +
                (this.state.firstnameState ? this.state.firstnameState : "") +
                (this.state.firstnameFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons users_circle-08" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                defaultValue={this.state.jobTitle}
                type="text"
                placeholder="Job Title (required)"
                name="jobTitle"
                onFocus={e => this.setState({ firstnameFocus: true })}
                onBlur={e => this.setState({ firstnameFocus: false })}
                onChange={e => this.jobTitleChange(e)}
              />
            </InputGroup>
            <InputGroup
              className={
                "form-control-lg" +
                (this.state.lastnameState ? this.state.lastnameState : "") +
                (this.state.lastnameFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                defaultValue={this.state.Details}
                type="text"
                placeholder="Details (required)"
                name="Details"
                onFocus={e => this.setState({ lastnameFocus: true })}
                onBlur={e => this.setState({ lastnameFocus: false })}
                onChange={e => this.DetailsChange(e)}
              />
            </InputGroup>
          </Col>
          <Col xs={12} lg={10} className="mt-3">
            <InputGroup
              className={
                "form-control-lg" +
                (this.state.emailState ? this.state.emailState : "") +
                (this.state.emailFocus ? " input-group-focus" : "")
              }
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                defaultValue={this.state.email}
                type="email"
                placeholder="Email (required)"
                name="email"
                onFocus={e => this.setState({ emailFocus: true })}
                onBlur={e => this.setState({ emailFocus: false })}
                onChange={e => this.emailChange(e)}
              />
            </InputGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Step1;
