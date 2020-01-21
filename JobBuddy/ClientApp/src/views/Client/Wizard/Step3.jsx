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

// reactstrap components
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import Axios from "axios";
import {LOCALHOST_URL_API} from "../../../Constants"

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

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null,
      jobcategories: []
    };
  }

componentDidMount(){
  Axios.get(`${LOCALHOST_API_URL}/jobcategories`)
  .then(res => {
    const jobcat = res.data;
    this.setState({jobcategories: jobcat});
  })
}

selectOpt = () => {
  let table = []

  for (let i = 0; i < this.state.jobcategories.length; i++) {
    
  }
  return table
}


  render() {
    
    return (
      <>
        <h5 className="info-text"> Are you living in a nice area? </h5>
        <Row className="justify-content-center">
          <Col xs={12} sm={7}>
            <FormGroup>
              <Label>Street Name</Label>
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
              options={selectOptions}
              onChange={value => this.setState({ select: value })}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Step3;
