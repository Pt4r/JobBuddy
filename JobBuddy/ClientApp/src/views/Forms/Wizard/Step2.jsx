import React from "react";
import { Row, Col } from "reactstrap";

import { IconCheckbox } from "components";

class Step2 extends React.Component {
  render() {
    return (
      <div>
        <h5 className="info-text"> What are you doing? (checkboxes) </h5>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <Row>
              <Col xs={12} sm={4}>
                <IconCheckbox
                  name="job"
                  value="Design"
                  icon="now-ui-icons design-2_ruler-pencil"
                  title="Design"
                />
              </Col>
              <Col xs={12} sm={4}>
                <IconCheckbox
                  name="job"
                  value="Code"
                  icon="now-ui-icons business_bulb-63"
                  title="Code"
                />
              </Col>
              <Col xs={12} sm={4}>
                <IconCheckbox
                  name="job"
                  value="Develop"
                  icon="now-ui-icons tech_tv"
                  title="Develop"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Step2;
