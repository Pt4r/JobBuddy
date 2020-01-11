import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

class IconCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: ""
    };
    this.checkboxClick = this.checkboxClick.bind(this);
  }
  checkboxClick() {
    if (this.state.checked !== "") {
      this.setState({
        checked: ""
      });
    } else {
      this.setState({
        checked: " active"
      });
    }
    this.refs.checkbox.click();
  }
  render() {
    return (
      <div
        className={"choice" + this.state.checked}
        onClick={() => this.checkboxClick()}
      >
        <input
          type="checkbox"
          name={this.props.name}
          value={this.props.value}
          ref="checkbox"
        />
        <div className="icon">
          <i className={this.props.icon} />
        </div>
        {this.props.title !== undefined ? <h6>{this.props.title}</h6> : null}
      </div>
    );
  }
}

IconCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default IconCheckbox;
