import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "views/Pages/LandingPage";


class Pages extends React.Component {

  render() {
    return (
      <div>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/contact' component={LandingPage} />
            </Switch>
      </div>

    );
  }
}

export default Pages;
