import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import LazyLoader from '../components/LazyLoader';

const DashboardComponent = lazy(() =>
  import(/* webpackChunkName: "dashboard" */ '../components/Dashboard')
);
const LandingPageComponent = lazy(() =>
  import(/* webpackChunkName: "landing-page" */ '../components/LandingPage')
);
const LoginPageComponent = lazy(() =>
  import(/* webpackChunkName: "login-page" */ '../components/LoginPage')
);
const RegistrationComponent = lazy(() =>
  import(/* webpackChunkName: "registration" */ '../components/Dashboard')
);

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact={true} path="/">
      <LazyLoader>
        <LandingPageComponent />
      </LazyLoader>
    </Route>
    <Route path="/login">
      <LazyLoader>
        <LoginPageComponent />
      </LazyLoader>
    </Route>
    <Route path="/register">
      <LazyLoader>
        <RegistrationComponent />
      </LazyLoader>
    </Route>
    <Route path="/dashboard">
      <LazyLoader>
        <DashboardComponent />
      </LazyLoader>
    </Route>
  </Switch>
);

export default Routes;
