import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  Container,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

import { Button } from "components";

import nowLogo from "assets/img/AFDempLogo.png";

import bgImage from "assets/img/bg14.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: "",
        confirm: "",
        emailState: "",
        confirmState: ""
      }
    };
  }
  loginEmail(e) {
    var login = this.state.login;
    login["email"] = e.target.value;
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(e.target.value)) {
      login["emailState"] = "has-success";
    } else {
      login["emailState"] = "has-danger";
    }
    this.setState({ login });
  }
  loginPassword(e) {
    var login = this.state.login;
    login["password"] = e.target.value;
    if (e.target.value.length > 0) {
      login["passwordState"] = "has-success";
    } else {
      login["passwordState"] = "has-danger";
    }
    this.setState({ login });
  }
  loginSubmit(e) {
    var login = this.state.login;
    if (login["emailState"] !== "has-success")
      login["emailState"] = "has-danger";
    if (login["passwordState"] !== "has-success")
      login["passwordState"] = "has-danger";
    if (login["fullNameState"] !== "has-success")
      login["fullNameState"] = "has-danger";
    this.setState({ login });
  }
  render() {
    return (
      <div className="wrapper wrapper-full-page ps">
        <div className="full-page section-image">
        <div className="content">
          <div className="login-page">
            <Container>
              <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
                <Form id="account" method="post">
                  <Card className="card-login card-plain">
                    <CardHeader>
                      <div className="logo-container">
                        <img src={nowLogo} alt="now-logo" />
                      </div>
                    </CardHeader>
                    <CardBody>

                      <InputGroup
                        className={
                          "no-border form-control-lg has-label " +
                          (this.state.emailFocus ? "input-group-focus " : "") 
                          + this.state.login.emailState
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          placeholder="Email"
                          onFocus={e => this.setState({ emailFocus: true })}
                          onBlur={e => this.setState({ emailFocus: false })}
                          onChange={e => this.loginEmail(e)}
                        />
                      </InputGroup>

                      <InputGroup
                        className={
                          "no-border form-control-lg has-label " +
                          (this.state.passwordFocus ? "input-group-focus " : "")
                          + this.state.login.passwordState
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons objects_key-25" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          onFocus={e => this.setState({ passwordFocus: true })}
                          onBlur={e => this.setState({ passwordFocus: false })}
                          onChange={e => this.loginPassword(e)}
                        />
                      </InputGroup>
                    </CardBody>
                    <CardFooter>
                      <Button
                        block
                        round
                        color="primary"
                        size="lg"
                        className="mb-3"
                        type="submit"
                        onClick={e => this.loginSubmit(e)}
                      >
                        Log in
                      </Button>
                      <div className="pull-left">
                        <h6>
                          <a href="/authentication/Register" className="link footer-link">
                            Create Account 
                          </a>
                        </h6>
                      </div>
                      <div className="pull-right">
                        <h6>
                          <a href="/contact" className="link footer-link">
                            Need Help?
                          </a>
                        </h6>
                      </div>
                    </CardFooter>
                  </Card>
                </Form>
              </Col>
            </Container>
          </div>
          </div>
        <div
          className="full-page-background"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        />
      </div>
      </div>
    );
  }
}

export default LoginPage;
