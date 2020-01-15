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
import AdminReactTable from "react-table";

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
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  
];

class AdminReactTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          position: prop[1],
          office: prop[2],
          age: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked LIKE button on \n{ \nName: " +
                      obj.name +
                      ", \nposition: " +
                      obj.position +
                      ", \noffice: " +
                      obj.office +
                      ", \nage: " +
                      obj.age +
                      "\n}."
                  );
                }}
                className="btn-icon btn-round"
                color="info"
                size="sm"
              >
                <i className="fa fa-heart" />
              </Button>{" "}
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                      obj.name +
                      ", \nposition: " +
                      obj.position +
                      ", \noffice: " +
                      obj.office +
                      ", \nage: " +
                      obj.age +
                      "\n}."
                  );
                }}
                className="btn-icon btn-round"
                color="warning"
                size="sm"
              >
                <i className="fa fa-edit" />
              </Button>{" "}
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
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">AdminReact Table</h2>
              <p className="category">
               
                {/* {" "} */}
                <a
                  href="https://react-table.js.org/#/story/readme"
                  target="_blank"
                >
                  react-table
                </a>
                . Spyro ntaksei re file,
                 telika to katafera monos mou. 
                 Thanks pantws
                 {/* {" "} */}
                <a
                  href="https://react-table.js.org/#/story/readme"
                  target="_blank"
                >
                  {/* full documentation. */}
                </a>
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">AdminReact Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <AdminReactTable
                    data={this.state.data}
                    filterable
                    columns={[
                      {
                        Header: "Name",
                        accessor: "name"
                      },
                      {
                        Header: "Position",
                        accessor: "position"
                      },
                      {
                        Header: "Office",
                        accessor: "office"
                      },
                      {
                        Header: "Age",
                        accessor: "age"
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

export default AdminReactTables;
