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
import CompanyModal from "./Forms/CompanyModal.js"
import { USERS_API_URL } from '../../Constants';


// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
  ButtonToolBar
} from "reactstrap";

// core components
 var data

class CompanyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }


componentDidMount(){
  const url = "localhost:3000/companies";
  fetch(url, {
    method: "GET"
  }).then(res => res.json()).then(data => {
    this.setState({data: data})
  })
}

deleteItem = id => {
  let confirmDeletion = window.confirm('Do you really wish to delete it?');
  if (confirmDeletion) {
    fetch(`${USERS_API_URL}/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        this.props.deleteItemFromState(id);
      })
      .catch(err => console.log(err));
  }
}

  render() {
    //const posts = this.props.posts;
    const columns =[
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "User Name",
        accessor: "username"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Actions",
        Cell: props =>{
          return ( 
            <div className="actions-right">
            <CompanyModal   />
              <Button 
              onClick={() =>{this.toggle}
                // let obj = this.state.posts.find(o => o.id === key);
                // alert(
                //   "You've clicked LIKE button on \n{ \nName: " +
                //     obj.name +
                //     ", \nposition: " +
                //     obj.position +
                //     ", \noffice: " +
                //     obj.office +
                //     ", \nage: " +
                //     obj.age +
                //     "\n}."
                // );
              }
              className="btn-icon btn-round"
              color="info"
              size="sm"
            >
              <i className="fa fa-heart" />
            </Button>{" "}               
            {/* use this button to remove the data row */}
            <Button
              onClick={() => {
                this.deleteItem(props.original.id);
              }}
              className="btn-icon btn-round"
              color="danger"
              size="sm"
            >
              <i className="fa fa-times" />
            </Button>{" "}
          </div>
          
          )
        },
        sortable: false,
        filterable: false
       }
    ]
    return (
      <>      
          <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Companies</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    filterable
                    columns = {columns}
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

export default CompanyTable;





// Might be usefull in the future 

  // toggle = () => {
  //     this.setState(previous => ({
  //         modal: !previous.modal
  //     }));
  // }
  
  // showModal() {
  //   this.setState({
  //     isModalOpen: true
  //   });
  // }


// const dataTable = ()=>{

//   axios.post("https://jsonplaceholder.typicode.com/users").then(function(response){console.log(response)});


//   var result;
//   const url = "https://jsonplaceholder.typicode.com/users";
//   fetch(url, {
//     method: "GET"
//   }).then(res => res.json())
//   .then(data => {
//     result=data;
//   })
//   console.log(result);

//   return result;
// };

// var columns =[
//   ["Name","name"],
//   ["Position","position"],
//   ["Office","office"],
//   ["Age","age"],
//   ["Actions","actions", false, false]
// ];



// class clientJobListings extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       columns: columns,
//       data: dataTable
//     };
//   }
// componentDidMount(){
//   axios.post("https://jsonplaceholder.typicode.com/users").then(function(response){console.log(response)});
// }
  
//     render() {
//       return (
//         <>
//         <PanelHeader size="sm" />
//         <ReactTables
//         title="Job Listings"
//         columns={this.state.columns}
//         data={this.state.data}
//         filterable
//         defaultPageSize={10}
//         showPaginationTop
//         showPaginationBottom={false}
//         className="-striped -highlight"
//       />
//       </>
//       );
//   };
// }

// export default clientJobListings;
