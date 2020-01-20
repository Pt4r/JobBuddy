import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

class CardStats extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={
          "card-stats" +
          (this.props.className !== undefined ? " " + this.props.className : "")
        }
      >
        {this.props.children}
      </div>
    );
  }
}

CardStats.propTypes = {
  children: PropTypes.array
};

export default CardStats;
