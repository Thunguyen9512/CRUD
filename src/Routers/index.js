import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Header, Home } from "Pages";

import { ROUTERS } from "Constants";

import ThemeProvider from "Context/Theme.Context";

const Root = () => {
  return (
    <ThemeProvider>
      <Header />
      <Router>
        <Switch>
          <Redirect exact from="/" to={ROUTERS.Home} />
          <Route exact path={ROUTERS.Home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
