import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

class Statistics extends React.Component {
  render() {
    const icon = (
      <div
        className={
          "icon icon-" +
          this.props.iconState +
          (this.props.horizontal ? " icon-circle" : "")
        }
      >
        <i className={"now-ui-icons " + this.props.icon} />
      </div>
    );
    const title = <h3 className="info-title">{this.props.title}</h3>;
    const subtitle = <h6 className="stats-title">{this.props.subtitle}</h6>;
    return (
      <div
        className={
          "statistics" + (this.props.horizontal ? " statistics-horizontal" : "")
        }
      >
        <div
          className={"info" + (this.props.horizontal ? " info-horizontal" : "")}
        >
          {this.props.horizontal && this.props.rtl ? (
            <Row>
              <Col xs={7} className="text-left">
                {title}
                {subtitle}
              </Col>
              <Col xs={5}>{icon}</Col>
            </Row>
          ) : this.props.horizontal ? (
            <Row>
              <Col xs={5}>{icon}</Col>
              <Col xs={7} className="text-right">
                {title}
                {subtitle}
              </Col>
            </Row>
          ) : (
            <div>
              {icon}
              {title}
              {subtitle}
            </div>
          )}
        </div>
      </div>
    );
  }
}

Statistics.defaultProps = {
  iconState: "default"
};

Statistics.propTypes = {
  iconState: PropTypes.oneOf([
    "primary",
    "success",
    "info",
    "danger",
    "warning",
    "default"
  ]),
  icon: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  horizontal: PropTypes.bool,
  rtl: PropTypes.bool
};

export default Statistics;
