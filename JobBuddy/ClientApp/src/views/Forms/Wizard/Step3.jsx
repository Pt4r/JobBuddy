import React from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" }
];

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null
    };
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Step3;
