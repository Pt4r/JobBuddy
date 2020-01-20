import React, { Component } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import JobListingModal from "../Forms/CompanyModal";
import axios from "axios";



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



class CompanyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    };
  }



componentDidMount(){
  axios.get(`https://localhost:44394/api/jobListings`)
  .then(res => {
    const posts = res.data;
    this.setState({posts: posts});
  })
}


deleteItem = id => {
  let confirmDeletion = window.confirm('Do you really wish to delete it?');
  if (confirmDeletion) {
    const url = `localhost:44394/api/jobListings/delete/${id}`
    fetch(url, {
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
   
    const columns =[
      {
        Header: "Id",
        accessor: "id",
        show: false
      },
      {
        Header: "Name",
        accessor: "title"
      },
      {
        Header: "info",
        accessor: "info"
      },
      {
        Header: "post Date",
        accessor: "postDate"
      },
      {
        Header: "hrUser",
        accessor: "hrUser"
      },
      {
        Header: "jobCategory",
        accessor: "jobCategory"
      },
      {
        Header: "company",
        accessor: "company"
      },
      {
        Header: "client",
        accessor: "client"
      },
      {
        Header: "Actions",
        Cell:       
        row =>
        {return ( 
            <div className="actions-right">
              <JobListingModal company={row.original} /> 
               {/* <Button 
              onClick={() =>{this.getTrProps}
              //let ogj = {this.onRowClick.map((original, key))}  
              //let obj = this.state.posts.find(o => o.id === key);
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
            </Button>{" "}                */}
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
                  <JobListingModal isNew/>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.posts}
                    filterable
                    columns = {columns}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    // getTdProps={this.getTdProps}
                    // getTrProps={this.getTrProps}
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