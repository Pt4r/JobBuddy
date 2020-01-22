import React, { Component } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import JobListingModal from "../Forms/CompanyModal";
import axios from "axios";
import { LOCALHOST_API_URL } from '../../../Constants';



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
    this.getCompanies();
  }
  
  getCompanies=() => {
  axios.get(`${ LOCALHOST_API_URL }/joblistings`)
    .then(res => {
      const posts = res.data;
      this.setState({posts: posts});
    })
  
  }
  
  
  
  deleteItem=(comp) => {
  //const url = `${LOCALHOST_API_URL}/company/delete`
    let confirmDeletion = window.confirm('Do you really wish to delete it?');
    if (confirmDeletion) {
      axios({
        method: 'DELETE',
        url:`${LOCALHOST_API_URL}/joblistings/delete` , 
        data: JSON.stringify(comp), 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })  
    .then(res => console.log(res.data))
    .then(this.getCompanies)
    .catch(error => {
      console.log(error)
  })
  }}




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
        Header: "jobCategory",
        accessor: "jobCategory"
      },
      {
        Header: "company",
        accessor: "company"
      },
      {
        Header: "Actions",
        Cell:       
        row =>
        {return ( 
            <div className="actions-right">
              <JobListingModal 
              company={row.original} 
              getCompanies={this.getCompanies} 
              tableState={this.state.posts}
              /> 
            <Button
              onClick={() => {
                this.deleteItem(row.original);
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
                  <CardTitle tag="h4">Job Listings</CardTitle>
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