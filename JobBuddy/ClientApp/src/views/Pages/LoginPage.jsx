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
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper wrapper-full-page ps">
        <div className="full-page section-image">
        <div className="content">
          <div className="login-page">
            <Container>
              <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
                <Form>
                  <Card className="card-login card-plain">
                    <CardHeader>
                      <div className="logo-container">
                        <img src={nowLogo} alt="now-logo" />
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border form-control-lg " +
                          (this.state.firstnameFocus ? "input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Email"
                          onFocus={e => this.setState({ firstnameFocus: true })}
                          onBlur={e => this.setState({ firstnameFocus: false })}
                        />
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border form-control-lg " +
                          (this.state.lastnameFocus ? "input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons objects_key-25" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Password"
                          onFocus={e => this.setState({ lastnameFocus: true })}
                          onBlur={e => this.setState({ lastnameFocus: false })}
                        />
                      </InputGroup>
                    </CardBody>
                    <CardFooter>
                      <Button
                        block
                        round
                        color="primary"
                        size="lg"
                        href="#pablo"
                        className="mb-3"
                      >
                        Get Started
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
