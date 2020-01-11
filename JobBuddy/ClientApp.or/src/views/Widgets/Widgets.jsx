import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardHeader
} from "reactstrap";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

import {
  PanelHeader,
  Statistics,
  Stats,
  CardDescription,
  CardStats,
  Timeline,
  CardIcon,
  Button,
  Tasks
} from "components";

import { widgetStories, tasks } from "variables/general";

import avatar from "assets/img/james.jpg";

class Widgets extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12} sm={6} md={6} lg={3}>
              <Card className="card-stats">
                <CardBody>
                  <Statistics
                    horizontal
                    icon="ui-2_chat-round"
                    iconState="primary"
                    title="1058"
                    subtitle="Messages"
                  />
                </CardBody>
                <hr />
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: " Update now "
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <Card className="card-stats">
                <CardBody>
                  <Statistics
                    horizontal
                    icon="business_bank"
                    iconState="warning"
                    title="$23,685"
                    subtitle="Deposit"
                  />
                </CardBody>
                <hr />
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons ui-1_calendar-60", t: " Last week " }]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <Card className="card-stats">
                <CardBody>
                  <Statistics
                    horizontal
                    icon="sport_user-run"
                    iconState="danger"
                    title="364"
                    subtitle="Players"
                  />
                </CardBody>
                <hr />
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons ui-2_time-alarm",
                        t: " In the last hour "
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <Card className="card-stats">
                <CardBody>
                  <Statistics
                    horizontal
                    icon="ui-2_favourite-28"
                    iconState="info"
                    title="+83K"
                    subtitle="Followers"
                  />
                </CardBody>
                <hr />
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: " Update now "
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={6} className="text-center">
              <Card className="card-contributions">
                <CardBody>
                  <CardTitle tag="h1">3,521</CardTitle>
                  <h3 className="card-category">Total Public Contributions</h3>
                  <CardDescription>
                    After a very successful two-year run, we’re going to be
                    changing the way that contributions work.
                  </CardDescription>
                </CardBody>
                <hr />
                <CardFooter>
                  <Row>
                    <Col xs={6}>
                      <CardStats className="justify-content-center">
                        <Switch onText="ON" offText="OFF" />
                        <span>All public contributions</span>
                      </CardStats>
                    </Col>
                    <Col xs={6}>
                      <CardStats className="justify-content-center">
                        <Switch
                          onText="ON"
                          offText="OFF"
                          defaultValue={false}
                        />
                        <span>Past week contributions</span>
                      </CardStats>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
              <Card className="card-tasks">
                <CardHeader>
                  <h5 className="card-category">Backend Development</h5>
                  <CardTitle tag="h4">Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Tasks tasks={tasks} />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons loader_refresh spin",
                        t: "Updated 3 minutes ago"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="card-plain card-timeline">
                <CardBody>
                  <Timeline stories={widgetStories} simple />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12} lg={6}>
                  <Card className="card-pricing">
                    <h6 className="card-category"> Alpha Pack</h6>
                    <CardBody>
                      <CardIcon
                        color="primary"
                        icon="now-ui-icons objects_diamond"
                      />
                      <CardTitle tag="h3">69$</CardTitle>
                      <ul>
                        <li>Working materials in EPS</li>
                        <li>6 months access to the library</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button href="#pablo" color="primary" round>
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col xs={12} lg={6}>
                  <Card className="card-pricing card-plain">
                    <h6 className="card-category"> Bravo Pack</h6>
                    <CardBody>
                      <CardIcon
                        color="warning"
                        icon="now-ui-icons media-1_button-power"
                      />
                      <CardTitle tag="h3">10$</CardTitle>
                      <ul>
                        <li>Complete documentation</li>
                        <li>Working materials in Sketch</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button href="#pablo" color="warning" neutral round>
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Card className="card-testimonial">
                <CardHeader className="card-header-avatar">
                  <a href="#pablo">
                    <img className="img img-raised" src={avatar} alt="..." />
                  </a>
                </CardHeader>
                <CardBody>
                  <CardDescription>
                    The networking at Web Summit is like no other European tech
                    conference.
                  </CardDescription>
                  <div className="icon icon-primary">
                    <i className="fa fa-quote-right" />
                  </div>
                </CardBody>
                <CardFooter>
                  <CardTitle tag="h4">Alton Becker</CardTitle>
                  <p className="category">@altonbecker</p>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Widgets;
