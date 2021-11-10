import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RedirectObserver from "../../observers/RedirectObserver";
// import { AppRoutes } from "../../routing/AppRoutes";
// import { AuthorizedApp } from "../../routing/AuthorizedApp";

import Login from "../../pages/Login/Login";
import { ROUTES } from "../../constans/routes";
import PageNotFound from "../../pages/PageNotFound";
import { MainLayout } from "../../layout/MainLayout";
import WorkoutPage from "../../pages/WorkoutPage";
import MusclePartsPage from '../../pages/MusclePartsPage'
import ExercizePage from '../../pages/ExercizePage'
import StartPage from '../../pages/StartPage/StartPage';
import SettingsPage from '../../pages/Settings/SettingsPage';


const AppProvider = () => {

    const BASENAME = "/";

    return (
        <Router basename={BASENAME}>
            <RedirectObserver>
                <Switch>
                    {/* <AppRoutes /> */}
                    <Route exact path={ROUTES.LOGIN} component={Login} />
                    <Route >
                        <MainLayout >
                            <Switch>
                                <Route exact path={ROUTES.START} component={StartPage} />
                                <Route path={ROUTES.WORKOUT} component={WorkoutPage} />
                                <Route path={ROUTES.MUSCLEPPARTS} component={MusclePartsPage} />
                                <Route path={ROUTES.EXERCIZE} component={ExercizePage} />
                                <Route path={ROUTES.SETTINGS} component={SettingsPage} />
                                <Route exact path={ROUTES.NOT_FOUND} component={PageNotFound} />
                            </Switch>
                        </MainLayout>
                    </Route>
                    {/*<AuthorizedApp /> */}
                </Switch>
            </RedirectObserver>
        </Router>
    )
}

export default AppProvider
