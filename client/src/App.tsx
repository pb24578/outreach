import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// AWS API/Authentication
import Amplify from 'aws-amplify';
import { AuthState } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

// Pages
import Landing from './pages/landing';
import Login, { actions as loginActions, getAuthState, getUserCredentials, shouldOnboarding } from './pages/login';
import Onboarding from './pages/onboarding';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Chat from './pages/chat';

// Styles
import './shared/styles/global.css';
import Theme from './shared/styles/theme';

const { setUser } = loginActions;

Amplify.configure(awsconfig);

const App = () => {
  const dispatch = useDispatch();
  const authState = useSelector(getAuthState);
  const mustOnboarding = useSelector(shouldOnboarding);
  const isSignedIn = authState === AuthState.SignedIn;
  const [userLoading, setUserLoading] = useState(true);
  const redirectLanding = !userLoading && !isSignedIn;
  const redirectOnboarding = !userLoading && mustOnboarding;
  const redirectDashboard = isSignedIn;

  /**
   * Loads the user and updates the state if the user is signed-in.
   */
  const setSignedInState = async () => {
    const user = await getUserCredentials();
    if (user) {
      dispatch(setUser(user));
    }
    setUserLoading(false);
  };

  useEffect(() => {
    if (!isSignedIn) {
      setSignedInState();
    }
  }, [authState]);

  if (userLoading) {
    return <div />;
  }

  return (
    <BrowserRouter>
      <Theme>
        <Switch>
          <Route exact path="/">
            {() => {
              if (redirectOnboarding) {
                return <Redirect to="/onboarding" />;
              }
              if (redirectDashboard) {
                return <Redirect to="/dashboard" />;
              }
              return <Landing />;
            }}
          </Route>
          <Route exact path="/login">
            {() => {
              if (redirectOnboarding) {
                return <Redirect to="/onboarding" />;
              }
              if (redirectDashboard) {
                return <Redirect to="/dashboard" />;
              }
              return <Login />;
            }}
          </Route>
          <Route exact path="/onboarding">
            <Onboarding />
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Theme>
    </BrowserRouter>
  );
};

export default App;
