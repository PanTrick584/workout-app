import React from "react";
import { Route, Switch } from "react-router";

import { ROUTES } from "../constans/routes";
import PageNotFound from "../pages/PageNotFound";
import { MainLayout } from "../layout/MainLayout";
import WorkoutPage from "../pages/WorkoutPage/WorkoutPage";
import MuscleParts from '../components/MuscleParts/MuscleParts'

export const AuthorizedApp = () => {
  return (
    <Route>
      <MainLayout >
        <Switch>
          <Route exact path={ROUTES.START} />
          <Route path={ROUTES.WORKOUT} component={WorkoutPage} />
          <Route path={ROUTES.MUSCLEPPARTS} component={MuscleParts} />
          <Route exact path={ROUTES.NOT_FOUND} component={PageNotFound} />
        </Switch>
      </MainLayout>
    </Route>
    
  );
};