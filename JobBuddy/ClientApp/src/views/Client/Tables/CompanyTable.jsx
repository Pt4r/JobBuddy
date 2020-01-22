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
import CompanyModal from "../Forms/CompanyModal";
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
axios.get(`${ LOCALHOST_API_URL }/company`)
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
      url:`${LOCALHOST_API_URL}/company/delete` , 
      data: JSON.stringify(comp), 
      headers:{'Content-Type': 'application/json; charset=utf-8'}
  })  
  .then(res => console.log(res.data))
  .then(this.getCompanies)
  .catch(error => {
    console.log(error)
})
}}




test(){
  console.log("test is good")
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
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber"
      },
      {
        Header: "Actions",
        Cell:       
        row =>
        {return ( 
            <div className="actions-right">
              <CompanyModal 
              company={row.original} 
              getCompanies={this.getCompanies} 
              tableState={this.state.posts} /> 
              
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
                  <CardTitle tag="h4">Companies</CardTitle>
                  <CompanyModal isNew getCompanies={this.getCompanies} tableState={this.state.posts} />
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






// deleteItem = id => {
//   let confirmDeletion = window.confirm('Do you really wish to delete it?');
//   if (confirmDeletion) {
//     const url = `${ LOCALHOST_API_URL }/companies/delete/${id}`
//     fetch(url, {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => {
//         this.props.deleteItemFromState(id);
//       })
//       .catch(err => console.log(err));
//   }
// }
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