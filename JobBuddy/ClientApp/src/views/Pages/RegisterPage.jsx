import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label
} from "reactstrap";

import { CardSocial, InfoArea, Button } from "components";

import bgImage from "assets/img/bg16.jpg";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper wrapper-full-page ps">
        <div className="full-page section-image">
        <div className="content">
          <div className="register-page">
            <Container>
              <Row className="justify-content-center">
                <Col lg={5} md={8} xs={12}>
                  <InfoArea
                    icon="now-ui-icons media-2_sound-wave"
                    iconColor="primary"
                    title="Job Hunting"
                    titleColor="info"
                    description="We've created a single hub to house all your needs when looking for a new job. Track which companies you have allready sent your CV, the HR people you have met with or find new jobs and apply to them on the spot!"
                  />
                  <InfoArea
                    icon="now-ui-icons users_single-02"
                    iconColor="primary"
                    title="One to One Mentorship"
                    titleColor="info"
                    description="We've developed this website to help you promote your self in the best way possible with a mentoring system by some of the best HR people in the industry."
                  />
                  <InfoArea
                    icon="now-ui-icons ui-1_send"
                    iconColor="info"
                    title="Built Audience"
                    titleColor="info"
                    description="Connect with your email provider to automatically send and never miss a reply!"
                  />
                </Col>
                <Col lg={4} md={8} xs={12}>
                  <Card className="card-signup">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Register with:</CardTitle>
                      <CardSocial
                        description=" or with an email bellow "
                        socials={[
                          { name: "github", link:"#" },
                          { name: "facebook", link:"#" },
                          { name: "linkedin", link:"#"}
                        ]}
                      />
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <InputGroup
                          className={
                            this.state.firstnameFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="First Name..."
                            onFocus={e =>
                              this.setState({ firstnameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ firstnameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={
                            this.state.lastnameFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons text_caps-small" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Last Name..."
                            onFocus={e =>
                              this.setState({ lastnameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ lastnameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={
                            this.state.emailFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="email"
                            placeholder="Email..."
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" {...this.props.inputProps} />
                            <span className="form-check-sign" />
                            <div>
                              I agree to the{" "}
                              <a href="#something">terms and conditions</a>.
                            </div>
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button color="primary" size="lg" round href="#pablo">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
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

export default RegisterPage;
