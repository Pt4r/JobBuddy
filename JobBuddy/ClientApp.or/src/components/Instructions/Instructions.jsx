import React from "react";
import { Row, Col } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Instructions extends React.Component {
  render() {
    return (
      <div className="instruction">
        <Row>
          <Col md={8} xs={12}>
            {this.props.title !== undefined ? (
              <strong>{this.props.title}</strong>
            ) : null}
            {this.props.description !== undefined ? (
              <p className="description">{this.props.description}</p>
            ) : null}
          </Col>
          <Col md={4} xs={12}>
            {this.props.img !== undefined ? (
              <div className="picture">
                <img
                  src={this.props.img}
                  alt={this.props.imgAlt}
                  className="rounded img-raised"
                />
              </div>
            ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}

Instructions.propTypes = {
  title: PropTypes.node,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  description: PropTypes.node
};

export default Instructions;
