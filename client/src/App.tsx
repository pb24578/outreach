import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// AWS API/Authentication
import Amplify from 'aws-amplify';
import { AuthState } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

// Pages
import Landing from './pages/landing';
import Login, { getAuthState, setUserState, isUserLoaded } from './pages/login';
import Onboarding from './pages/onboarding';
import Dashboard, { getUserData } from './pages/dashboard';
import Profile from './pages/profile';
import Chat from './pages/chat';

// Styles
import './shared/styles/global.css';
import Theme from './shared/styles/theme';

Amplify.configure(awsconfig);

const App = () => {
  const userLoaded = useSelector(isUserLoaded);
  const authState = useSelector(getAuthState);
  const userData = useSelector(getUserData);
  const userDataLoaded = userData === undefined || userData;

  const isSignedIn = authState === AuthState.SignedIn;
  const redirectLanding = !isSignedIn;
  const redirectOnboarding = isSignedIn && userData === undefined;
  const redirectDashboard = isSignedIn && userData;

  useEffect(() => {
    if (!isSignedIn) {
      setUserState();
    }
  }, [authState]);

  if (!userLoaded || !userDataLoaded) {
    return <div />;
  }

  /**
   * Re-directs the logged-in user to either the onboarding or dashboard.
   */
  const redirectSession = () => {
    if (redirectOnboarding) {
      return <Redirect to="/onboarding" />;
    }
    if (redirectDashboard) {
      return <Redirect to="/dashboard" />;
    }
    return null;
  };

  /**
   * Re-directs the not logged-in user to the landing or logged-in user to the onboarding.
   */
  const redirectNoSession = () => {
    if (redirectLanding) {
      return <Redirect to="/" />;
    }
    if (redirectOnboarding) {
      return <Redirect to="/onboarding" />;
    }
    return null;
  };

  return (
    <BrowserRouter>
      <Theme>
        <Switch>
          <Route exact path="/">
            {redirectSession() || <Landing />}
          </Route>
          <Route exact path="/login">
            {redirectSession() || <Login />}
          </Route>
          <Route exact path="/onboarding">
            {() => {
              if (redirectLanding) {
                return <Redirect to="/" />;
              }
              if (redirectDashboard) {
                return <Redirect to="/dashboard" />;
              }
              return <Onboarding />;
            }}
          </Route>
          <Route exact path="/dashboard">
            {redirectNoSession() || <Dashboard />}
          </Route>
          <Route exact path="/profile">
            {redirectNoSession() || <Profile />}
          </Route>
          <Route exact path="/chat">
            {redirectNoSession() || <Chat />}
          </Route>
        </Switch>
      </Theme>
    </BrowserRouter>
  );
};

export default App;
