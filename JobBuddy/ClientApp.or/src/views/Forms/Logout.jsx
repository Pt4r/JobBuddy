import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { userService } from "./../../services/index";

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => ({
  logout() {
    return dispatch(userService.logout());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
