import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

class InfoArea extends React.Component {
  render() {
    return (
      <div className="info-area info-horizontal">
        {this.props.icon !== undefined ? (
          <div className={"icon icon-" + this.props.iconColor}>
            <i className={this.props.icon} />
          </div>
        ) : null}
        <div className="description">
          <h5 className={"info-title"}>{this.props.title}</h5>
          <p className="description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

InfoArea.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.oneOf([
    "info",
    "success",
    "primary",
    "warning",
    "danger",
    "neutral"
  ]),
  title: PropTypes.node,
  description: PropTypes.node
};

export default InfoArea;
