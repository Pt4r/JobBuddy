import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Row,
  Col
} from "reactstrap";

import { PanelHeader, FormInputs, Button } from "components";

class RegularForms extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={6} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Stacked Form</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormInputs
                      // ncols={["col-12", "col-12", "col-12"]}
                      proprieties={[
                        {
                          label: "Email address",
                          inputProps: {
                            type: "email"
                          }
                        },
                        {
                          label: "Password",
                          inputProps: {
                            type: "password"
                          }
                        },
                        {
                          label: "Subscribe to newsletter",
                          labelProps: {
                            check: true
                          },
                          inputProps: {
                            type: "checkbox"
                          },
                          formGroupProps: {
                            check: true,
                            className: "mt-3"
                          }
                        }
                      ]}
                    />
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button color="primary">Submit</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Horizontal Form</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form-horizontal">
                    <Row>
                      <Label md={3}>Username</Label>
                      <Col xs={12} md={9}>
                        <FormGroup>
                          <Input type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label md={3}>Email</Label>
                      <Col xs={12} md={9}>
                        <FormGroup>
                          <Input type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label md={3}>Password</Label>
                      <Col xs={12} md={9}>
                        <FormGroup>
                          <Input type="password" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label md={3} />
                      <Col xs={12} md={9}>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            Remember me
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Label md={3} />
                    <Col xs={12} md={9}>
                      <Button color="primary">Sign in</Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col md={12} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Form Elements</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form-horizontal">
                    <Row>
                      <Label sm={2}>With help</Label>
                      <Col xs={12} sm={10}>
                        <FormGroup>
                          <Input type="text" />
                          <FormText color="default">
                            A block of help text that breaks onto a new line.
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Password</Label>
                      <Col xs={12} sm={10}>
                        <FormGroup>
                          <Input type="password" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Placeholder</Label>
                      <Col xs={12} sm={10}>
                        <FormGroup>
                          <Input type="text" placeholder="placeholder" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Disabled</Label>
                      <Col xs={12} sm={10}>
                        <FormGroup>
                          <Input
                            type="text"
                            disabled
                            placeholder="Disabled input here.."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Static control</Label>
                      <Col xs={12} sm={10}>
                        <FormGroup>
                          <Input plaintext>hello@creative-tim.com</Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Checkboxes and radios</Label>
                      <Col xs={12} sm={10} className="checkbox-radios">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" defaultChecked />
                            <span className="form-check-sign" />
                            First Checkbox
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            Second Checkbox
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input type="radio" name="radios" defaultChecked />
                            <span className="form-check-sign" />
                            First Radio
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input type="radio" name="radios" />
                            <span className="form-check-sign" />
                            Second Radio
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Inline checkboxes</Label>
                      <Col xs={12} sm={10}>
                        <FormGroup check className="form-check-inline">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            a
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-inline">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            b
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-inline">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            c
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md={12} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Input Variants</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form-horizontal">
                    <Row>
                      <Label sm={2}>Custom Checkboxes & radios</Label>
                      <Col xs={12} sm={4} className="checkbox-radios">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" defaultChecked />
                            <span className="form-check-sign" />
                            Checked
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            Unchecked
                          </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                          <Label check>
                            <Input type="checkbox" defaultChecked disabled />
                            <span className="form-check-sign" />
                            Checked
                          </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                          <Label check>
                            <Input type="checkbox" disabled />
                            <span className="form-check-sign" />
                            Unchecked
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col xs={12} sm={5}>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              type="radio"
                              name="ndradios"
                              defaultChecked
                            />
                            <span className="form-check-sign" />
                            Checked
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input type="radio" name="ndradios" />
                            <span className="form-check-sign" />
                            Unchecked
                          </Label>
                        </FormGroup>
                        <FormGroup check disabled className="form-check-radio">
                          <Label check>
                            <Input
                              type="radio"
                              name="dradios"
                              defaultChecked
                              disabled
                            />
                            <span className="form-check-sign" />
                            Checked
                          </Label>
                        </FormGroup>
                        <FormGroup check disabled className="form-check-radio">
                          <Label check>
                            <Input type="radio" name="dradios" disabled />
                            <span className="form-check-sign" />
                            Unchecked
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Input with success</Label>
                      <Col xs={12} sm={10}>
                        <FormGroup className="has-success">
                          <Input type="text" defaultValue="Success" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Input with error</Label>
                      <Col xs={12} sm={10}>
                        <FormGroup className="has-danger">
                          <Input type="text" defaultValue="Error" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm={2}>Column sizing</Label>
                      <Col xs={12} sm={10}>
                        <Row>
                          <Col xs={12} md={3}>
                            <FormGroup>
                              <Input type="text" placeholder="md={3}" />
                            </FormGroup>
                          </Col>
                          <Col xs={12} md={4}>
                            <FormGroup>
                              <Input type="text" placeholder="md={4}" />
                            </FormGroup>
                          </Col>
                          <Col xs={12} md={5}>
                            <FormGroup>
                              <Input type="text" placeholder="md={5}" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RegularForms;
