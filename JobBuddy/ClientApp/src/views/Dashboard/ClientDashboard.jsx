 /*!

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Progress,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import {
  dashboardSummerChart,
  dashboardActiveCountriesCard
} from "variables/charts.jsx";

import { table_data } from "variables/general.jsx";


class Dashboard extends React.Component {
  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag" />
            </div>
          </td>
          <td>{table_data[i].country}</td>
          <td className="text-right">{table_data[i].count}</td>
        </tr>
      );
    }
    return tableRows;
  }
  render() {
    return (
      <>
        <PanelHeader
          size="sm"
        />
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <Card className="card-stats card-raised">
                <CardBody>
                  <Row>
                    <Col md="3">
                      <div className="statistics">
                        <div className="info">
                          <div className="icon icon-primary">
                            <i className="now-ui-icons ui-2_chat-round" />
                          </div>
                          <h3 className="info-title">2</h3>
                          <h6 className="stats-title">Messages</h6>
                        </div>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="statistics">
                        <div className="info">
                          <div className="icon icon-success">
                            <i className="now-ui-icons business_briefcase-24" />
                          </div>
                          <h3 className="info-title">6</h3>
                          <h6 className="stats-title">Job Offers</h6>
                        </div>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="statistics">
                        <div className="info">
                          <div className="icon icon-info">
                            <i className="now-ui-icons files_single-copy-04" />
                          </div>
                          <h3 className="info-title">63</h3>
                          <h6 className="stats-title">Job Listings</h6>
                        </div>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="statistics">
                        <div className="info">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons ui-1_send" />
                          </div>
                          <h3 className="info-title">2</h3>
                          <h6 className="stats-title">Jobs Waiting for Reply</h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
           <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Email Stats</h5>
                  <CardTitle tag="h2">53</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-icon"
                      color="default"
                      outline
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
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
                      data={dashboardSummerChart.data}
                      options={dashboardSummerChart.options}
                    />
                  </div>
                  <div className="card-progress">
                    <div className="progress-container">
                      <span className="progress-badge">Delivery Rate</span>
                      <Progress max="100" value="90">
                        <span className="progress-value">98%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-success">
                      <span className="progress-badge">Open Rate</span>
                      <Progress max="100" value="60">
                        <span className="progress-value">60%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Click Rate</span>
                      <Progress max="100" value="12">
                        <span className="progress-value">12%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-warning">
                      <span className="progress-badge">Hard Bounce</span>
                      <Progress max="100" value="5">
                        <span className="progress-value">2%</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-danger">
                      <span className="progress-badge">Spam Report</span>
                      <Progress max="100" value="0.11">
                        <span className="progress-value">0.11%</span>
                      </Progress>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" />
                    Just Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Countries</h5>
                  <CardTitle tag="h2">40</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-icon"
                      color="default"
                      outline
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
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
                  <Table responsive>
                    <tbody>{this.createTableData()}</tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" />
                    Just Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
           
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Active Countries</h5>
                  <CardTitle tag="h2">105</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardActiveCountriesCard.data}
                      options={dashboardActiveCountriesCard.options}
                    />
                  </div>
                  
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-2_time-alarm" />
                    Last 7 days
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          </div>
      </>
    );
  }
}

export default Dashboard;
