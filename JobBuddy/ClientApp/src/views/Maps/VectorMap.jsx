import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

import { PanelHeader } from "components";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class VectorMaps extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Vector Map</h2>
              <p className="category">
                Looks great on any resolution.{" "}
                <a
                  href="https://www.npmjs.com/package/react-jvectormap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React wrapper component
                </a>{" "}
                of jQuery{" "}
                <a
                  href="http://jvectormap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jVector Map
                </a>{" "}
                pluging.
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardBody>
                  <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "400px"
                    }}
                    containerClassName="map map-big"
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      }
                    }}
                    series={{
                      regions: [
                        {
                          values: mapData,
                          scale: ["#AAAAAA", "#444444"],
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default VectorMaps;
