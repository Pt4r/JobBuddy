import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

import { PanelHeader, Timeline } from "components";

import { stories } from "variables/general.jsx";

class TimelinePage extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <div className="header text-center">
            <h3 className="title">Timeline</h3>
          </div>
          <Row>
            <Col md={12} xs={12}>
              <Card className="card-plain card-timeline">
                <CardBody>
                  <Timeline stories={stories} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TimelinePage;
