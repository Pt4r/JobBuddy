import React from "react";
import { Progress } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class CustomProgress extends React.Component {
  render() {
    const { badge, ...rest } = this.props;
    return (
      <div
        className={
          "progress-container" +
          (this.props.color !== undefined
            ? " progress-" + this.props.color
            : "")
        }
      >
        {this.props.badge !== undefined ? (
          <span className="progress-badge">{this.props.badge}</span>
        ) : null}
        <Progress {...rest}>
          {this.props.value !== undefined ? (
            <span className="progress-value">{this.props.value}%</span>
          ) : null}
        </Progress>
      </div>
    );
  }
}

CustomProgress.propTypes = {
  badge: PropTypes.node
};

export default CustomProgress;
