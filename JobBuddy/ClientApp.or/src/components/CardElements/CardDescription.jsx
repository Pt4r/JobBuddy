import React from "react";
import PropTypes from "prop-types";

class CardDescription extends React.Component {
  render() {
    return <p className="card-description">{this.props.children}</p>;
  }
}

CardDescription.propTypes = {
  children: PropTypes.any
};

export default CardDescription;
