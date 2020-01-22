import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

import PanelClient from "views/Components/PanelClient"

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
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
          <Row className="text-center justify-content-center">
        <Col sm={12} lg={12} >
            <div >

            
            <PanelClient>
      
            </PanelClient>
            </div>
            </Col>
          </Row> 
        <div>
          
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
           
          </Row>
          
          </div>
      </>
    );
  }
}

export default Dashboard;
