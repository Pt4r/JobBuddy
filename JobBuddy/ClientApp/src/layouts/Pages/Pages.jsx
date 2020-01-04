import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import { PagesHeader, Footer } from "components";

import pagesRoutes from "routes/pages.jsx";

var ps;

class Pages extends React.Component {
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.fullPages);
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div>
        <PagesHeader {...this.props} />
        <div className="wrapper wrapper-full-page" ref="fullPages">
          <div className="full-page section-image">
            <Switch>
              {pagesRoutes.map((prop, key) => {
                if (prop.redirect)
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <Footer fluid />
          </div>
        </div>
      </div>
    );
  }
}

export default Pages;
