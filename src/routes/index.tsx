import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import LazyLoader from '../components/LazyLoader';
import LoadingPage from '../components/LoadingPage';

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
  import(/* webpackChunkName: "registration" */ '../components/Registration')
);

const SignUpSuccessComponent = lazy(() =>
  import(/* webpackChunkName: "signup-success" */ '../components/SignUpSuccess')
);

const SignOutComponent = lazy(() =>
  import(/* webpackChunkName: "signout" */ '../components/SignOut')
);

const ErrorPageComponent = lazy(() =>
  import(/* webpackChunkName: "error" */ '../components/ErrorPage')
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
    <Route path="/signup-success">
      <LazyLoader>
        <SignUpSuccessComponent />
      </LazyLoader>
    </Route>
    <Route path="/signout">
      <LazyLoader>
        <SignOutComponent />
      </LazyLoader>
    </Route>
    <Route path="/loading">
      <LoadingPage />
    </Route>
    <Route path="/error">
      <LazyLoader>
        <ErrorPageComponent />
      </LazyLoader>
    </Route>
  </Switch>
);

export default Routes;
