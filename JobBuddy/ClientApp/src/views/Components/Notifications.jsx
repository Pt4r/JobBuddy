import React from "react";
import {
  Alert,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

import { PanelHeader, Button, Instructions } from "components";

import img1 from "assets/img/bg1.jpg";
import img2 from "assets/img/bg3.jpg";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      modalMini: false,
      modalClassic: false,
      modalNotice: false
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.toggleModalClassic = this.toggleModalClassic.bind(this);
    this.toggleModalNotice = this.toggleModalNotice.bind(this);
    this.toggleModalMini = this.toggleModalMini.bind(this);
    this.notify = this.notify.bind(this);
  }
  onDismiss() {}
  toggleModalClassic() {
    this.setState({
      modalClassic: !this.state.modalClassic
    });
  }
  toggleModalNotice() {
    this.setState({
      modalNotice: !this.state.modalNotice
    });
  }
  toggleModalMini() {
    this.setState({
      modalMini: !this.state.modalMini
    });
  }
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful premium admin for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  }
  render() {
    return (
      <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Notifications</h2>
              <p className="category">
                Please Checkout{" "}
                <a
                  href="https://github.com/creativetimofficial/react-notification-alert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Full Documentation
                </a>.
              </p>
            </div>
          }
        />
        <div className="content">
          <NotificationAlert ref="notificationAlert" />
          <Row>
            <Col md={6} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notifications Style</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <Alert
                    color="info"
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                  >
                    <span>This is a notification with close button.</span>
                  </Alert>
                  <Alert
                    color="info"
                    className="alert-with-icon"
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                  >
                    <span
                      data-notify="icon"
                      className="now-ui-icons ui-1_bell-53"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </Alert>
                  <Alert
                    color="info"
                    className="alert-with-icon"
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                  >
                    <span
                      data-notify="icon"
                      className="now-ui-icons ui-1_bell-53"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </Alert>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notification states</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert
                    color="primary"
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                  >
                    <span>
                      <b> Primary - </b> This is a regular notification made
                      with color="primary"
                    </span>
                  </Alert>
                  <Alert
                    color="info"
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                  >
                    <span>
                      <b> Info - </b> This is a regular notification made with{" "}
                      color="info"
                    </span>
                  </Alert>
                  <Alert
                    color="success"
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                  >
                    <span>
                      <b> Success - </b> This is a regular notification made
                      with color="success"
                    </span>
                  </Alert>
                  <Alert
                    color="warning"
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                  >
                    <span>
                      <b> Warning - </b> This is a regular notification made
                      with color="warning"
                    </span>
                  </Alert>
                  <Alert
                    color="danger"
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}
                  >
                    <span>
                      <b> Danger - </b> This is a regular notification made with{" "}
                      color="danger"
                    </span>
                  </Alert>
                </CardBody>
              </Card>
            </Col>
            <Col md={12} xs={12}>
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardTitle tag="h4">
                          Notifications Places
                          <p className="category">
                            Click to view notifications
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={8} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("tl")}
                            >
                              Top Left
                            </Button>
                          </Col>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("tc")}
                            >
                              Top Center
                            </Button>
                          </Col>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("tr")}
                            >
                              Top Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={8} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("bl")}
                            >
                              Bottom Left
                            </Button>
                          </Col>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("bc")}
                            >
                              Bottom Center
                            </Button>
                          </Col>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("br")}
                            >
                              Bottom Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <Row className="btns-mr-5">
                    <Col md={12} className="text-center">
                      <CardHeader>
                        <CardTitle tag="h4">Modal</CardTitle>
                      </CardHeader>
                      <Button color="primary" onClick={this.toggleModalClassic}>
                        Classic modal
                      </Button>
                      <Modal
                        isOpen={this.state.modalClassic}
                        toggle={this.toggleModalClassic}
                        className="text-center"
                      >
                        <ModalHeader
                          className="justify-content-center uppercase title"
                          toggle={this.toggleModalClassic}
                          tag="h4"
                        >
                          Modal Title
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean. A small river named Duden
                            flows by their place and supplies it with the
                            necessary regelialia. It is a paradisematic country,
                            in which roasted parts of sentences fly into your
                            mouth.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="default">Nice Button</Button>
                          <Button
                            color="danger"
                            onClick={this.toggleModalClassic}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </Modal>
                      <Button color="info" onClick={this.toggleModalNotice}>
                        Notice modal
                      </Button>
                      <Modal
                        isOpen={this.state.modalNotice}
                        toggle={this.toggleModalNotice}
                        className="modal-notice text-center"
                      >
                        <ModalHeader toggle={this.toggleModalNotice}>
                          How Do You Become an Affiliate?
                        </ModalHeader>
                        <ModalBody>
                          <Instructions
                            title="1. Register"
                            description={
                              <span>
                                The first step is to create an account at{" "}
                                <a href="https://www.creative-tim.com/">
                                  Creative Tim
                                </a>. You can choose a social network or go for
                                the classic version, whatever works best for
                                you.
                              </span>
                            }
                            img={img1}
                          />
                          <Instructions
                            title="2. Apply"
                            description={
                              <span>
                                The first step is to create an account at{" "}
                                <a href="https://www.creative-tim.com/">
                                  Creative Tim
                                </a>. You can choose a social network or go for
                                the classic version, whatever works best for
                                you.
                              </span>
                            }
                            img={img2}
                          />
                          <p>
                            If you have more questions, don't hesitate to
                            contact us or send us a tweet @creativetim. We're
                            here to help!
                          </p>
                        </ModalBody>
                        <ModalFooter className="justify-content-center">
                          <Button
                            color="info"
                            round
                            onClick={this.toggleModalNotice}
                          >
                            Sounds good!
                          </Button>
                        </ModalFooter>
                      </Modal>
                      <Button color="warning" onClick={this.toggleModalMini}>
                        Small alert modal
                      </Button>
                      <Modal
                        isOpen={this.state.modalMini}
                        toggle={this.toggleModalMini}
                        size="mini"
                        modalClassName="modal-primary"
                      >
                        <div className="modal-header justify-content-center">
                          <div className="modal-profile">
                            <i className="now-ui-icons users_circle-08" />
                          </div>
                        </div>
                        <ModalBody>
                          <p>Always have an access to your profile</p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="link" disabled neutral>
                            Back
                          </Button>{" "}
                          <Button
                            color="link"
                            neutral
                            onClick={this.toggleModalMini}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Notifications;
