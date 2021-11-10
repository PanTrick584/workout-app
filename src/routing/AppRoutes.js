import React from "react";
import { Route, Switch } from "react-router";

import { ROUTES } from "../constans/routes";
import Login from "../pages/Login/Login";

export const AppRoutes = () => {
  return (
      <Route exact path={ROUTES.LOGIN} component={Login} />
  );
};