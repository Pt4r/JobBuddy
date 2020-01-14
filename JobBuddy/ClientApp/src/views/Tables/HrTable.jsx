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
import JobListingModal from "../../components/Form/JobListingModal.jsx"
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

class ReactTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[],
    };
  }

  toggle = () => {
    this.setState(previous => ({
        modal: !previous.modal
    }));
}

showModal() {
  this.setState({
    isModalOpen: true
  });
}


componentDidMount(){
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url, {
    method: "GET"
  }).then(res => res.json()).then(posts => {
    this.setState({posts: posts})
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
    const posts = this.props.posts;

    const columns =[
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Actions",
        Cell: props =>{
          return (  // <JobListingModal 
          //   initialModalState={false} />
            <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <JobListingModal />
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
         
               
            {/* use this button to add a edit kind of action */}
            <Button
              onClick={() => {
                let obj = this.state.posts.find(o => o.id === key);
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
            <JobListingModal  
          initialModalState={false} />
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">React Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.posts}
                    filterable
                    columns = {columns}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className="-striped -highlight"
                    />
{/* 
                      {(state, filteredData, instance) => {
                        this.ReactTable = state.pageRows.map(post => {return post.original});
                      }}
                    </ReactTable> */}
                  
                </CardBody>
              </Card>
            </Col>
          </Row>

          
      </>
    );
  }
}

export default ReactTables;
