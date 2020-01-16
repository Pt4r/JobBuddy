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

import ReactTableMentor from "views/Tables/ReactTableMentor";

import PanelMentor from "views/Components/PanelsMentor"


// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

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
          <td className="text-right">{table_data[i].percentage}</td>
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
          // content={
         
          // }
        />
        <div >
        <Row className="text-center justify-content-center">
        <Col sm={12} lg={12} >
            <div >

            
            <PanelMentor>
      
            </PanelMentor>
            </div>
            </Col>
          </Row>  
          <Row>
            <Col sm={12} lg={12}>
              <Card className="card-stats card-raised">
                <CardBody>
                  <Row>
                  
                 
                    <Col md="3">
                      <div className="statistics">
                        <div className="info">
                          <div className="icon icon-success">
                            <i className="now-ui-icons business_money-coins" />
                          </div>
                          <h3 className="info-title">
                           
                            352
                          </h3>
                          <h6 className="stats-title">Offers</h6>
                        </div>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="statistics">
                        <div className="info">
                          <div className="icon icon-info">
                            <i className="now-ui-icons users_single-02" />
                          </div>
                          <h3 className="info-title">111</h3>
                          <h6 className="stats-title">Profile Views</h6>
                        </div>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="statistics">
                        <div className="info">
                          <div className="icon icon-info">
                            <i className="now-ui-icons ui-2_like" />
                          </div>
                          <h3 className="info-title">353</h3>
                          <h6 className="stats-title">Likes</h6>
                        </div>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="statistics">
                        <div className="info">
                          <div className="icon icon-primary">
                            <i className="now-ui-icons ui-2_chat-round" />
                          </div>
                          <h3 className="info-title">859</h3>
                          <h6 className="stats-title">Messages</h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
         
          <Col sm={12} lg={12}>
          <ReactTableMentor/>
          </Col>
          </Row>
         
         
        
        </div>
      </>
    );
  }
}

export default Dashboard;
