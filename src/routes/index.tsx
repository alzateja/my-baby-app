import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import LazyLoader from '../components/LazyLoader';
import Loading from '../components/common/Loading';

const DashboardComponent = lazy(() =>
  import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard')
);
const LandingPageComponent = lazy(() =>
  import(/* webpackChunkName: "landing-page" */ '../pages/LandingPage')
);
const LoginPageComponent = lazy(() =>
  import(/* webpackChunkName: "login-page" */ '../pages/LoginPage')
);
const RegistrationComponent = lazy(() =>
  import(/* webpackChunkName: "registration" */ '../pages/Registration')
);

const SignUpSuccessComponent = lazy(() =>
  import(/* webpackChunkName: "signup-success" */ '../pages/SignUpSuccess')
);

const SignOutComponent = lazy(() => import(/* webpackChunkName: "signout" */ '../pages/SignOut'));

const ErrorPageComponent = lazy(() => import(/* webpackChunkName: "error" */ '../pages/ErrorPage'));

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
      <Loading />
    </Route>
    <Route path="/error">
      <LazyLoader>
        <ErrorPageComponent />
      </LazyLoader>
    </Route>
  </Switch>
);

export default Routes;
