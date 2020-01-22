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
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import Axios from "axios";
import {LOCALHOST_API_URL} from "../../../Constants"
import CompanyModal from "../../Client/Forms/CompanyModal"

// reactstrap components
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

// core components
var selectOptions = [
  { value: "IT", label: "IT" },
  { value: "Economics", label: "Economics" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "Engineering", label: "Engineering" },
  { value: "Arts", label: "Arts" },
  { value: "Tourism", label: "Tourism" },
  { value: "CustomerSupport", label: "CustomerSupport" }
];


function parseJobCategories(jobCategories){
  return jobCategories.map((jc) => {
    return { label: jc.id, value: jc.jobCategoryTitle };
  });
}

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectJobCat: null,
      selectComp: null,
      jobcategories: [],
      companies:[],
      

    };
  }

  // componentDidMount(){
  //   Axios.get(`${LOCALHOST_API_URL}/jobcategory`)
  //   .then(data => {
  //     let jobCat = data.map((jc,i) => {
  //       return {value: jc.Id, label: jc.JobCategoryTitle}
  //     }).then(res =>{
  //     this.setState({jobCat})
  //     })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // })}

  componentDidMount() {
    this.getJobCategories();
    this.getCompanies();
  }

  getJobCategories(){
    fetch("https://localhost:5001/api/jobcategory")
      .then((response) => {
        return response.json();
      })
      .then(data => {
        let teamsFromApi = data.map(team => {
          return {value: team.id, label: team.jobCategoryTitle}
        });
        this.setState({
          jobcategories:teamsFromApi
        });
        console.log(this.state.jobcategories)
      }).catch(error => {
        console.log(error);
      });
  }

  getCompanies(){
    fetch("https://localhost:5001/api/company")
      .then((response) => {
        return response.json();
      })
      .then(data => {
        let teamsFromApi = data.map(team => {
          return {value: team.id, label: team.title}
        })
        this.setState({
          companies:teamsFromApi
        })})
      .catch(error => {
        console.log(error);
      });
  }





  render() {
    return (
      <>
        <h5 className="info-text"> Please add Company and Contact Person Details </h5>
   
        <hr/>
        <Row className="justify-content-center">
          <Col xs={12} sm={4}>
          <Label>JobCategory</Label>
            <Select
              className="primary react-select"
              classNamePrefix="react-select"
              placeholder="Single Select"
              name="singleSelect"
              value={this.state.select}
              options={this.state.jobcategories  }
              onChange={value => this.setState({ selectJobCat: value })}
            /> 
            </Col>
            </Row>
            <hr/>
            <Row className="justify-content-center">
            <Col xs={12} sm={4}>
            <Label>Company</Label>
              <Select
              className="primary react-select"
              classNamePrefix="react-select"
              placeholder="Single Select"
              name="singleSelect2"
              value={this.state.selectcomp}
              options={this.state.companies  }
              onChange={value => this.setState({ selectComp: value })}
            /> 
          </Col>
          </Row>
          <Row className="justify-content-center">
 
            <CompanyModal isNew  getCompanies={this.getCompanies} tableState={this.state.companies}/>
        
        </Row>
      </>
    );
  }
}

export default Step3;



// componentDidMount() {
//     fetch(title_URL)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             // Here you need to use an temporary array to store NeededInfo only 
//             let tmpArray = []
//             for (var i = 0; i < data.results.length; i++) {
//                 tmpArray.push(data.results[i].NeededInfo)
//             }

//             this.setState({
//                 other: tmpArray
//             })
//         });
// }
// updatedJobCat = this.state.jobcategories.map((company, compIndex, compArr) => {
//       return company.keys.map((key, keyIndex, keyArr) => {
//         return {
//           key_name: key,
//           jobCategoryTitle: company.jobCategoryTitle,
//         };
//       });
//     })
//     .reduce((acc, cur) => {
//       return [...acc, ...cur];
//     }, [])
//     .filter((item, index, array) => {
//       return array.indexOf(item.dtype);
//     })

//     onclick(){
//       console.log(this.updatedJobCat)
//     }

     {/* <Row className="justify-content-center">
          <Col xs={12} sm={7}>
            <FormGroup>
              <Label>Company Name</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col xs={12} sm={3}>
            <FormGroup>
              <Label>Street No.</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col xs={12} sm={5}>
            <FormGroup>
              <Label>City</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col xs={12} sm={5}>
            <Label>Country</Label>
            <Select
              className="primary react-select"
              classNamePrefix="react-select"
              placeholder="Single Select"
              name="singleSelect"
              value={this.state.select}
              options={this.state.jobcategories  }
              onChange={value => this.setState({ select: value })}
            />
          </Col>
        </Row>
        */}