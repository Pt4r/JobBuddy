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
// import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

const  dataTable = [

  
  constructor(props) {

    super(props);

    this.state = {
        items: [],
        isLoaded: false
    }

}

/**
 * componentDidMount
 *
 * Fetch json array of objects from given url and update state.
 */
componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true
            })
        }).catch((err) => {
            console.log(err);
        });
}

];

import ApiDataHr from "variables/ApiDataHr.jsx";

class ReactTables extends Component {
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


  // componentDidMount() {

  //   fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(res => res.json())
  //       .then(json => {
  //         this.setState({
  //           dataTable: json,
  //           isLoaded: true
  //       })
  //   }).catch((err) => {
  //       console.log(err);
  //   });
  // }


  render() {  
    // if(!dataTable.length)
    // return null;
    return (
      <>
{/* 
            <PanelHeader
          size="sm"
          content={
            <div className="header text-center">
              <h2 className="title">Welcome Spyros</h2>
              </div>
          }
        />  */}
          <Row>
            <Col xs={12} md={12} >
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Job Listings</CardTitle>
                  <Button
                  color="primary" size="lg">
                      Create New Job Listing
                    </Button>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    filterable
                    columns={[
                      {
                        Header: "Name",
                        accessor: "name"
                      },
                      {
                        Header: "Email",
                        accessor: "email"
                      },
                      {
                        Header: "Company",
                        accessor: "office"
                      },
                      {
                        Header: "Info",
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
      </>
    );
  }
}

export default ReactTables;




// data: items.map((prop, key) => {
//   return {
//     id: key,
//     name: prop[0],
//     email: prop[1],
//     actions: (
//       // we've added some custom button actions
//       <div className="actions-right">
//         {/* use this button to add a like kind of action */}
//         <Button
//           onClick={() => {
//             let obj = this.state.items.find(o => o.id === key);
//             alert(
//               "You've clicked LIKE button on \n{ \nName: " +
//                 obj.name +
//                 ", \nposition: " +
//                 obj.position +
//                 ", \noffice: " +
//                 obj.office +
//                 ", \nage: " +
//                 obj.age +
//                 "\n}."
//             );
//           }}
//           className="btn-icon btn-round"
//           color="info"
//           size="sm"
//         >
//           <i className="fa fa-heart" />
//         </Button>{" "}
//         {/* use this button to add a edit kind of action */}
//         <Button
//           onClick={() => {
//             let obj = this.state.items.find(o => o.id === key);
//             alert(
//               "You've clicked EDIT button on \n{ \nName: " +
//                 obj.name +
//                 ", \nposition: " +
//                 obj.position +
//                 ", \noffice: " +
//                 obj.office +
//                 ", \nage: " +
//                 obj.age +
//                 "\n}."
//             );
//           }}
//           className="btn-icon btn-round"
//           color="warning"
//           size="sm"
//         >
//           <i className="fa fa-edit" />
//         </Button>{" "}
//         {/* use this button to remove the data row */}
//         <Button
//           onClick={() => {
//             var data = this.state.data;
//             data.find((o, i) => {
//               if (o.id === key) {
//                 // here you should add some custom code so you can delete the data
//                 // from this component and from your server as well
//                 data.splice(i, 1);
//                 console.log(data);
//                 return true;
//               }
//               return false;
//             });
//             this.setState({ data: data });
//           }}
//           className="btn-icon btn-round"
//           color="danger"
//           size="sm"
//         >
//           <i className="fa fa-times" />
//         </Button>{" "}
//       </div>
//     )          
//   };
// })