import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col
} from "reactstrap";

import { Accordion, PanelHeader } from "components";

class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hTabs: "ht1",
      vTabs: "vt1",
      vTabsIcons: "vti1",
      pageSubcategories: "ps1"
    };
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row className="justify-content-center">
            <Col lg={6} md={8} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">
                    Navigation Pills -{" "}
                    <small className="description">Horizontal Tabs</small>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Nav pills className="nav-pills-primary">
                    <NavItem>
                      <NavLink
                        className={this.state.hTabs === "ht1" ? "active" : ""}
                        onClick={() => this.setState({ hTabs: "ht1" })}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={this.state.hTabs === "ht2" ? "active" : ""}
                        onClick={() => this.setState({ hTabs: "ht2" })}
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={this.state.hTabs === "ht3" ? "active" : ""}
                        onClick={() => this.setState({ hTabs: "ht3" })}
                      >
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    activeTab={this.state.hTabs}
                    className="tab-space"
                  >
                    <TabPane tabId="ht1">
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="ht2">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </TabPane>
                    <TabPane tabId="ht3">
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6} md={8} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">
                    Navigation Pills -{" "}
                    <small className="description">Vertical Tabs</small>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md={4} xs={12}>
                      <Nav pills className="nav-pills-primary flex-column">
                        <NavItem>
                          <NavLink
                            className={
                              this.state.vTabs === "vt1" ? "active" : ""
                            }
                            onClick={() => this.setState({ vTabs: "vt1" })}
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.vTabs === "vt2" ? "active" : ""
                            }
                            onClick={() => this.setState({ vTabs: "vt2" })}
                          >
                            Settings
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.vTabs === "vt3" ? "active" : ""
                            }
                            onClick={() => this.setState({ vTabs: "vt3" })}
                          >
                            Options
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md={8} xs={12}>
                      <TabContent activeTab={this.state.vTabs}>
                        <TabPane tabId="vt1">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                          <br />
                          <br />
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </TabPane>
                        <TabPane tabId="vt2">
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                          <br />
                          <br />
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </TabPane>
                        <TabPane tabId="vt3">
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.
                          <br />
                          <br />
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6} md={8} xs={12}>
              <Card>
                <CardBody>
                  <Accordion
                    plain
                    defaultOpened={0}
                    components={[
                      {
                        title: "Collapsible Group Item #1",
                        text:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                      },
                      {
                        title: "Collapsible Group Item #2",
                        text:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                      },
                      {
                        title: "Collapsible Group Item #3",
                        text:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                      }
                    ]}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col lg={6} md={8} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">
                    Navigation Pills Icons -{" "}
                    <small className="description">Vertical Tabs</small>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs={12} md={6} lg={3}>
                      <Nav
                        pills
                        className="nav-pills-primary nav-pills-icons flex-column"
                      >
                        <NavItem>
                          <NavLink
                            className={
                              this.state.vTabsIcons === "vti1" ? "active" : ""
                            }
                            onClick={() =>
                              this.setState({ vTabsIcons: "vti1" })
                            }
                          >
                            <i className="now-ui-icons objects_umbrella-13" />
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={
                              this.state.vTabsIcons === "vti2" ? "active" : ""
                            }
                            onClick={() =>
                              this.setState({ vTabsIcons: "vti2" })
                            }
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                            Settings
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col xs={12} md={8}>
                      <TabContent activeTab={this.state.vTabsIcons}>
                        <TabPane tabId="vti1">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                          <br />
                          <br />
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </TabPane>
                        <TabPane tabId="vti2">
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                          <br />
                          <br />
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={8} xs={12} className="ml-auto mr-auto">
              <Card className="card-plain card-subcategories">
                <CardHeader>
                  <CardTitle tag="h4" className="text-center">
                    Page Subcategories
                  </CardTitle>
                  <br />
                </CardHeader>
                <CardBody>
                  <Nav
                    pills
                    className="nav-pills-primary nav-pills-icons justify-content-center"
                  >
                    <NavItem>
                      <NavLink
                        className={
                          this.state.pageSubcategories === "ps1" ? "active" : ""
                        }
                        onClick={() =>
                          this.setState({ pageSubcategories: "ps1" })
                        }
                      >
                        <i className="now-ui-icons objects_umbrella-13" />
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.pageSubcategories === "ps2" ? "active" : ""
                        }
                        onClick={() =>
                          this.setState({ pageSubcategories: "ps2" })
                        }
                      >
                        <i className="now-ui-icons shopping_shop" />
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.pageSubcategories === "ps3" ? "active" : ""
                        }
                        onClick={() =>
                          this.setState({ pageSubcategories: "ps3" })
                        }
                      >
                        <i className="now-ui-icons ui-2_settings-90" />
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-space tab-subcategories"
                    activeTab={this.state.pageSubcategories}
                  >
                    <TabPane tabId="ps1">
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="ps2">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </TabPane>
                    <TabPane tabId="ps3">
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Panels;
