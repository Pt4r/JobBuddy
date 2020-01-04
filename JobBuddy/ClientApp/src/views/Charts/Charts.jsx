import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import { PanelHeader, CardCategory, Stats } from "components";

import {
  chartsLine1,
  chartsLine2,
  chartsBar1,
  chartsBar2
} from "variables/charts";

class Charts extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">React Chartjs 2</h2>
              <p className="category">
                Simple yet flexible React charting for designers &amp;
                developers. Made by our friends from{" "}
                <a
                  target="_blank"
                  href="https://jerairrest.github.io/react-chartjs-2/"
                  rel="noopener noreferrer"
                >
                  react-chartjs-2
                </a>, a react based wrapper over{" "}
                <a
                  target="_blank"
                  href="https://www.chartjs.org"
                  rel="noopener noreferrer"
                >
                  Chart.js
                </a>. Please check{" "}
                <a
                  target="_blank"
                  href="https://github.com/jerairrest/react-chartjs-2"
                  rel="noopener noreferrer"
                >
                  react-chartjs-2 documentation
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  href="https://www.chartjs.org/docs/latest/"
                  rel="noopener noreferrer"
                >
                  Chart.js documentation
                </a>{" "}
                .
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={5} className="ml-auto">
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Simple With Gradient</CardCategory>
                  <CardTitle tag="h4">Line Chart</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartsLine1.data}
                      options={chartsLine1.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={5} className="mr-auto">
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>With Numbers And Grid</CardCategory>
                  <CardTitle tag="h4">Line Chart 2</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartsLine2.data}
                      options={chartsLine2.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={5} className="ml-auto">
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Simple With Grids And Numbers</CardCategory>
                  <CardTitle tag="h4">Bar Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <Bar data={chartsBar1.data} options={chartsBar1.options} />
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days" }]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={5} className="mr-auto">
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Multiple Bars No Gradient</CardCategory>
                  <CardTitle tag="h4">Bar Chart 2</CardTitle>
                </CardHeader>
                <CardBody>
                  <Bar data={chartsBar2.data} options={chartsBar2.options} />
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days" }]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Charts;
