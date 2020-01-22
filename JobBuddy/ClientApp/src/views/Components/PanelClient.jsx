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

import Button from "views/Components/ButtonsMentor"

// reactstrap components
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
  Col,
  Collapse
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import { render } from "react-dom";
import ReactTableMentor from "views/Tables/ReactTableMentor";

class PanelsMentor extends React.Component {
  state = {
    openedCollapses: ["collapseOne"],
    hTabs: "ht1",
    vTabs: "vt1",
    vTabsIcons: "vti1",
    pageSubcategories: "ps1",
    
  };


  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  collapsesToggle = collapse => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: []
      });
    } else {
      this.setState({
        openedCollapses: [collapse]
      });
    }
  };

 
  render() {
    return (
      
       
          <Row className="justify-content-center">
            
               
            <Col lg={12} md={12} xs={12} xl={12}>
              <Card>
              <CardHeader>
                  <CardTitle tag="h4" margin="auto">
                  Welcome to your Personal Dashboard!
                    
                  </CardTitle>
                </CardHeader>
                <CardBody >
                  <Nav pills className="nav-pills-primary justify-content-center">
                    <NavItem className="text-center">
                      <NavLink
                        className={this.state.hTabs === "ht1" ? "active" : ""}
                        onClick={() => this.setState({ hTabs: "ht1" })}
                      >
                       Job Openings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={this.state.hTabs === "ht2" ? "active" : ""}
                        onClick={() => this.setState({ hTabs: "ht2" })}
                      >
                        Your Schedule
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={this.state.hTabs === "ht3" ? "active" : ""}
                        onClick={() => this.setState({ hTabs: "ht3" })}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    activeTab={this.state.hTabs}
                    className="tab-space"
                  >
                    <TabPane tabId="ht1">
                    Check all your Available Job Openings and don't  miss a chance!
                      <div></div>
                      
                     
                    </TabPane>
                    <TabPane tabId="ht2">
                    Organize your Schedule in a proffessional way!

                    </TabPane>
                    <TabPane tabId="ht3">
                    Increase Your Profile Views and Offers by keeping your Profile  Up to Date!
                   
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            </Row>
         
           
           
         
  
       
         
         
            
                  
         
    );
  }
}

export default PanelsMentor;
