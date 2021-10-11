import React from "react";
import { Redirect, Route } from "react-router-dom";

import { LayoutRoot } from "MyComponents";

function PrivateRoute({ children, ...rest }) {
  let auth = { user: {} };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <LayoutRoot>{children}</LayoutRoot>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
