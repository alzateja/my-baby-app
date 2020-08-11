import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import LandingPage from '../components/LandingPage';
import LazyLoader from '../components/LazyLoader';
import LoginPage from '../components/LoginPage';

const LandingPageComponent = lazy(() =>
  import(/* webpackChunkName: "landing-page" */ '../components/LandingPage')
);
const LoginPageComponent = lazy(() =>
  import(/* webpackChunkName: "login-page" */ '../components/LoginPage')
);
const DashboardComponent = lazy(() =>
  import(/* webpackChunkName: "dashboard" */ '../components/Dashboard')
);

const Routes = () => (
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
    <Route path="/dashboard">
      <LazyLoader>
        <DashboardComponent />
      </LazyLoader>
    </Route>
  </Switch>
);

export default Routes;
