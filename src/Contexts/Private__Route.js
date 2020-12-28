import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth__Context";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!token ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
