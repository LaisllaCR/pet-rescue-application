import React from "react";
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from "react-router-dom";

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const RouteWrapper: React.FC<RouteProps> = ({
  component: Component,
  ...propsRestantes
}) => {
  return (
    <ReactDOMRoute
      {...propsRestantes}
      render={() => {
        return <Component />;
      }}
    />
  );
};

export default RouteWrapper;
