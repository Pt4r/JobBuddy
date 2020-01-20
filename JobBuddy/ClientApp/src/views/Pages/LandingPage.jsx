import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import PagesNavbar from "components/Navbars/PagesNavbar";
import LandingPageHeader from "components/PanelHeader/LandingPageHeader";
import PagesFooter from "components/Footer/PagesFooter";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <PagesNavbar />
      <div className="wrapper" style={{overflow: "inherit"}}>
        <LandingPageHeader />
        <ScrollableAnchor id={'about_us'}>
        <div className="section section-about-us">
          <Container>
          <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  The Curly Brackets is developing this website to help job seekers organize their job finding process with a structured all-in-one solution where they can list all the companies and Human Resourses people that they have sent their CV and never loose track on which company replied and which didn't.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
          </Container>
        </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'team'}>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="3">
                <div className="team-player">
                    <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/stratos.jpg")}
                    ></img>
                    <h4 className="title">Stratos<br />Palaiologos</h4>
                    <p className="category text-info">Project Manager</p>
                    <p className="description">
                        The Great Coordinator. The Knower of Coding.  {" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        </a>{" "}
                    </p>
                </div>
            </Col>
            <Col md="3">
              <div className="team-player">
                  <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/misichronis.jpg")}
                  ></img>
                  <h4 className="title">Spyros<br />Misichronis</h4>
                  <p className="category text-info">Frontend Developer</p>
                  <p className="description">
                      Responsible for CRUD method in React and expert in APIs{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      </a>{" "}
                  </p>  
              </div>
            </Col>
            <Col md="3">
              <div className="team-player">
                  <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/theofilatos.jpg")}
                  ></img>
                  <h4 className="title">Spyros<br />Theofilatos</h4>
                  <p className="category text-info">Backend Developer</p>
                  <p className="description">
                      Entity Framework ace and Controler adept{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      </a>{" "}
                  </p>
              </div>
            </Col>
            <Col md="3">
                <div className="team-player">
                    <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/delos.jpg")}
                    ></img>
                    <h4 className="title">Pantelis<br />Bakogeorgos</h4>
                    <p className="category text-info">HTML5/CSS Developer</p>
                    <p className="description">
                        An artist at heart and a skilled designer{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>

                        </a>{" "}

                    </p>

                </div>
            </Col>
          </Row>
        </div>
      </Container>
        </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Contact</h2>
            <p className="description">Your feedback is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </ScrollableAnchor>
        <PagesFooter />
      </div>
  </>
  );
}

export default LandingPage;
