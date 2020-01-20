import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create datetimepicker
import Datetime from "react-datetime";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// plugin that creates slider
import Slider from "nouislider";

import { PanelHeader, ImageUpload, Progress } from "components";

var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" }
];

class ExtendedForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: null,
      multipleSelect: null,
      singleFileName: "",
      multipleFileName: "",
      singleFile: null,
      multipleFile: null,
      regularTags: ["pizza", "pasta", "parmesan"]
    };
    this.handleRegularTags = this.handleRegularTags.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
  }
  componentDidMount() {
    var slider1 = this.refs.slider1;
    var slider2 = this.refs.slider2;
    Slider.create(slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    Slider.create(slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  handleRegularTags(regularTags) {
    this.setState({ regularTags });
  }
  // // // to understand the bellow functions please take a look at the end of the document as well
  // this handles the onFocus event over the normal / visible Inputs (reactstrap components)
  // that will trigger the on click of the non-visible inputs (normal html component)
  handleFileInput(e, type) {
    this.refs[type].click(e);
  }
  // this is the function triggered for the file type input
  // it will store inside the components state the names of the files and the files
  // after that, if you want to save the files you need to add a special on submit function for that
  // we haven't since we do not need to save the files - everything in our product is only front-end
  addFile(e, type) {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
      if (type === "multipleFile" && i !== e.target.files.length - 1) {
        fileNames = fileNames + ", ";
      }
    }
    this.setState({
      [type + "Name"]: fileNames,
      [type]: files
    });
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Datetime Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Date Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      timeFormat={false}
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Time Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      dateFormat={false}
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <CardBody>
                  <Row>
                    <Col xs={12} md={6}>
                      <CardTitle tag="h4">Toggle Buttons</CardTitle>
                      <Row>
                        <Col xs={12} md={4}>
                          <p className="category">Default</p>
                          <Switch defaultValue={false} /> <Switch />
                        </Col>
                        <Col xs={12} md={4}>
                          <p className="category">Plain</p>
                          <Switch
                            onText=""
                            offText=""
                            defaultValue={false}
                          />{" "}
                          <Switch onText="" offText="" />
                        </Col>
                        <Col xs={12} md={4}>
                          <p className="category">With Icons</p>
                          <Switch
                            onText={<i className="now-ui-icons ui-1_check" />}
                            offText={
                              <i className="now-ui-icons ui-1_simple-remove" />
                            }
                            defaultValue={false}
                          />{" "}
                          <Switch
                            onText={<i className="now-ui-icons ui-1_check" />}
                            offText={
                              <i className="now-ui-icons ui-1_simple-remove" />
                            }
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={6}>
                      <CardTitle tag="h4">Customisable Select</CardTitle>
                      <Row>
                        <Col xs={12} md={6}>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            placeholder="Single Select"
                            name="singleSelect"
                            value={this.state.singleSelect}
                            options={selectOptions}
                            onChange={value =>
                              this.setState({ singleSelect: value })
                            }
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Select
                            className="react-select warning"
                            classNamePrefix="react-select"
                            isMulti
                            closeMenuOnSelect={false}
                            placeholder="Multiple Select"
                            name="multipleSelect"
                            value={this.state.multipleSelect}
                            options={selectOptions}
                            onChange={value =>
                              this.setState({ multipleSelect: value })
                            }
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <CardTitle tag="h4">Tags</CardTitle>
                      <TagsInput
                        value={this.state.regularTags}
                        onChange={this.handleRegularTags}
                        tagProps={{ className: "react-tagsinput-tag info" }}
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <CardTitle tag="h4">Dropdown & Dropup</CardTitle>
                      <Row>
                        <Col xs={12} md={6} sm={3} lg={4}>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color="info"
                              className="btn-round btn-block"
                              caret
                            >
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem disabled>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                        <Col xs={12} md={6} sm={3} lg={4}>
                          <UncontrolledDropdown direction="up">
                            <DropdownToggle
                              color="primary"
                              className="btn-round btn-block"
                              caret
                            >
                              Dropup
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem disabled>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <CardTitle tag="h4">Progress Bars</CardTitle>
                      <Progress badge="Default" value="25" />
                      <Progress color="primary" badge="primary" value="60" />
                    </Col>
                    <Col xs={12} md={6}>
                      <CardTitle tag="h4">Sliders</CardTitle>
                      <div className="slider" ref="slider1" />
                      <br />
                      <div className="slider slider-primary" ref="slider2" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <Row>
                        <Col xs={12} sm={6} md={6}>
                          <CardTitle tag="h4">Regular Image</CardTitle>
                          <ImageUpload />
                        </Col>
                        <Col xs={12} sm={6} md={6}>
                          <CardTitle tag="h4">Avatar</CardTitle>
                          <ImageUpload avatar />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={4}>
                      <CardTitle tag="h4">Single File</CardTitle>
                      <FormGroup className="form-file-upload form-file-simple">
                        <Input
                          type="text"
                          className="inputFileVisible"
                          placeholder="Simple chooser..."
                          onFocus={e => this.handleFileInput(e, "singleFile")}
                          value={this.state.singleFileName}
                        />
                        <input
                          type="file"
                          className="inputFileHidden"
                          style={{ zIndex: -1 }}
                          ref="singleFile"
                          onChange={e => this.addFile(e, "singleFile")}
                        />
                      </FormGroup>
                      <CardTitle tag="h4">Multiple File</CardTitle>
                      <FormGroup className="form-file-upload form-file-simple">
                        <Input
                          type="text"
                          className="inputFileVisible"
                          placeholder="Multiple chooser..."
                          onFocus={e => this.handleFileInput(e, "multipleFile")}
                          value={this.state.multipleFileName}
                        />
                        <input
                          multiple
                          type="file"
                          className="inputFileHidden"
                          style={{ zIndex: -1 }}
                          ref="multipleFile"
                          onChange={e => this.addFile(e, "multipleFile")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ExtendedForms;
