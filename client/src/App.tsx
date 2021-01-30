import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './shared/styles/global.css';
import Amplify from 'aws-amplify';
import { AuthState } from '@aws-amplify/ui-components';
import Login, { actions as loginActions, getAuthState, getUserCredentials } from './pages/login';
import Theme from './shared/styles/theme';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Chat from './pages/chat';
import awsconfig from './aws-exports';

const { setAuthState, setUser } = loginActions;

Amplify.configure(awsconfig);

const App = () => {
  const dispatch = useDispatch();
  const authState = useSelector(getAuthState);
  const isSignedIn = authState === AuthState.SignedIn;

  /**
   * Loads the user and updates the state if the user is signed-in.
   */
  const setSignedInState = async () => {
    const user = await getUserCredentials();
    if (user) {
      dispatch(setUser(user));
      dispatch(setAuthState(AuthState.SignedIn));
    }
  };

  useEffect(() => {
    if (!isSignedIn) {
      setSignedInState();
    }
  }, [authState]);

  return (
    <BrowserRouter>
      <Theme>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            {isSignedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/profile">
            {isSignedIn ? <Profile /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/chat">
            {isSignedIn ? <Chat /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Theme>
    </BrowserRouter>
  );
};

export default App;
