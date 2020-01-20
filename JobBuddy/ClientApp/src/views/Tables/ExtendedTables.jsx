import React from "react";
import {
  Table,
  UncontrolledTooltip,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import { PanelHeader, Button } from "components";

import jacket from "assets/img/saint-laurent.jpg";
import shirt from "assets/img/balmain.jpg";
import swim from "assets/img/prada.jpg";

class ExtendedTables extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr className="text-primary">
                        <th className="text-center">#</th>
                        <th>Name</th>
                        <th>Job Position</th>
                        <th className="text-center">Since</th>
                        <th className="text-right">Salary</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>Andrew Mike</td>
                        <td>Develop</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">€ 99,225</td>
                        <td className="text-right">
                          <Button icon color="info" size="sm">
                            <i className="now-ui-icons users_single-02" />
                          </Button>{" "}
                          <Button icon color="success" size="sm">
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>{" "}
                          <Button icon color="danger" size="sm">
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>John Doe</td>
                        <td>Design</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 89,241</td>
                        <td className="text-right">
                          <Button icon color="info" size="sm">
                            <i className="now-ui-icons users_single-02" />
                          </Button>{" "}
                          <Button icon color="success" size="sm">
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>{" "}
                          <Button icon color="danger" size="sm">
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>Alex Mike</td>
                        <td>Design</td>
                        <td className="text-center">2010</td>
                        <td className="text-right">€ 92,144</td>
                        <td className="text-right">
                          <Button icon color="info" size="sm">
                            <i className="now-ui-icons users_single-02" />
                          </Button>{" "}
                          <Button icon color="success" size="sm">
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>{" "}
                          <Button icon color="danger" size="sm">
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>Mike Monday</td>
                        <td>Marketing</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">€ 49,990</td>
                        <td className="text-right">
                          <Button icon neutral color="info" size="sm">
                            <i className="now-ui-icons users_single-02" />
                          </Button>{" "}
                          <Button icon neutral color="success" size="sm">
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>{" "}
                          <Button icon neutral color="danger" size="sm">
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td>Paul Dickens</td>
                        <td>Communication</td>
                        <td className="text-center">2015</td>
                        <td className="text-right">€ 69,201</td>
                        <td className="text-right">
                          <Button icon neutral color="info" size="sm">
                            <i className="now-ui-icons users_single-02" />
                          </Button>{" "}
                          <Button icon neutral color="success" size="sm">
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>{" "}
                          <Button icon neutral color="danger" size="sm">
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">6</td>
                        <td>Manuel Rico</td>
                        <td>Manager</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 99,201</td>
                        <td className="text-right">
                          <Button icon neutral color="info" size="sm">
                            <i className="now-ui-icons users_single-02" />
                          </Button>{" "}
                          <Button icon neutral color="success" size="sm">
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>{" "}
                          <Button icon neutral color="danger" size="sm">
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Striped Table with Checkboxes</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive striped>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">#</th>
                        <th className="text-center" />
                        <th>Product Name</th>
                        <th>Type</th>
                        <th className="text-center">Qty</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" defaultChecked />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Moleskine Agenda</td>
                        <td>Office</td>
                        <td className="text-center">25</td>
                        <td className="text-right">€ 49</td>
                        <td className="text-right">€ 1,225</td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Stabilo Pen</td>
                        <td>Office</td>
                        <td className="text-center">30</td>
                        <td className="text-right">€ 10</td>
                        <td className="text-right">€ 300</td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" defaultChecked />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>A4 Paper Pack</td>
                        <td>Office</td>
                        <td className="text-center">50</td>
                        <td className="text-right">€ 10.99</td>
                        <td className="text-right">€ 109</td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Apple iPad</td>
                        <td>Meeting</td>
                        <td className="text-center">10</td>
                        <td className="text-right">€ 499.00</td>
                        <td className="text-right">€ 4,990</td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" defaultChecked />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Apple iPhone</td>
                        <td>Communication</td>
                        <td className="text-center">10</td>
                        <td className="text-right">€ 599.00</td>
                        <td className="text-right">€ 5,999</td>
                      </tr>
                      <tr>
                        <td colSpan="5" />
                        <td className="td-total">Total</td>
                        <td className="td-price">€ 35,999</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Shopping Cart Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive className="table-shopping">
                    <thead>
                      <tr>
                        <th className="text-center" />
                        <th>PRODUCT</th>
                        <th>COLOR</th>
                        <th>Size</th>
                        <th className="text-right">PRICE</th>
                        <th className="text-right">QTY</th>
                        <th className="text-right">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={jacket} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#jacket">Suede Biker Jacket</a>
                          <br />
                          <small>by Saint Laurent</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>3,390
                        </td>
                        <td className="td-number">
                          1{" "}
                          <ButtonGroup>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-delete" />
                            </Button>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>549
                        </td>
                        <td className="td-actions">
                          <Button id="remove1" neutral>
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            placement="left"
                            target="remove1"
                            delay={0}
                          >
                            Remove item
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={shirt} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#shirt">Jersey T-Shirt</a>
                          <br />
                          <small>by Balmain</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>499
                        </td>
                        <td className="td-number">
                          2{" "}
                          <ButtonGroup>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-delete" />
                            </Button>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>998
                        </td>
                        <td className="td-actions">
                          <Button id="remove2" neutral>
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            placement="left"
                            target="remove2"
                            delay={0}
                          >
                            Remove item
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={swim} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pants">Slim-Fit Swim Short </a>
                          <br />
                          <small>by Prada</small>
                        </td>
                        <td>Red</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>200
                        </td>
                        <td className="td-number">
                          3{" "}
                          <ButtonGroup>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-delete" />
                            </Button>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>799
                        </td>
                        <td className="td-actions">
                          <Button id="remove3" neutral>
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            placement="left"
                            target="remove3"
                            delay={0}
                          >
                            Remove item
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3" />
                        <td className="td-total">Total</td>
                        <td className="td-price">
                          <small>€</small>2,346
                        </td>
                        <td colSpan="3" className="text-right">
                          <Button color="info" round>
                            Complete Purchase{" "}
                            <i className="now-ui-icons arrows-1_minimal-right" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ExtendedTables;
