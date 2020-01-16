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
/*eslint-disable*/
import React, { Component } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

const dataTable = [

  ["Antonia Gerogianni","Athens", "656565", "ag@hotmail.com", "19/01/2020","22/01/2020","pending","23/01/2020"],
  ["Antonia Gerogianni","Athens", "656565", "ag@hotmail.com", "19/01/2020","22/01/2020","pending","23/01/2020"]
];

class ReactTablesMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          client: prop[0],
          city:prop[1],
          phoneNumber: prop[2],
          email: prop[3],
          postDate: prop[4],
          expirationDate:prop[5],
          status:prop[6],
          requestedAppointmentDate:prop[7],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
          
              <Button
                // onClick={() => {
                //   let obj = this.state.data.find(o => o.id === key);
                
                // }}
                className="btn-icon btn-round"
                color="success"
                size="sm"
              >
                <i className="now-ui-icons ui-1_check" />
              </Button>{" "}
              {/* use this button to add a edit kind of action */}
              
              {/* use this button to remove the data row */}
              <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                className="btn-icon btn-round"
                color="danger"
                size="sm"
              >
                <i className="fa fa-times" />
              </Button>{" "}
              
            </div>
          )
        };
      })
    };
  }
  render() {
    return (
      <>
       
        <div >
          <Row className="justify-content-center">
            <Col xs={10} md={10}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Your Offers</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    
                    columns={[
                      {
                        Header: "Client",
                        accessor: "client"
                      },
                    
                      {
                        Header: "City",
                        accessor: "city"
                      },
                      {
                        Header: "Phone Number",
                        accessor: "phoneNumber"
                      },
                      {
                        Header: "Email",
                        accessor: "email"
                      },

                      {
                        Header: "Posted On",
                        accessor: "postDate"
                      },

                      {
                        Header: "Expires On",
                        accessor: "expirationDate"
                      },

                      {
                        Header: "Status",
                        accessor: "status"
                      },
                      {
                        Header: "Actions",
                        accessor: "actions",
                        sortable: false,
                        filterable: false
                      }
                    ]}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className="-striped -highlight"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ReactTablesMentor;
