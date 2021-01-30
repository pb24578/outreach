import React, { useEffect, useState } from 'react';
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
  const [userLoading, setUserLoading] = useState(true);
  const isSignedIn = authState === AuthState.SignedIn;

  /**
   * Loads the user and updates the state if the user is signed-in.
   */
  const setSignedInState = async () => {
    const user = await getUserCredentials();
    if (user) {
      dispatch(setAuthState(AuthState.SignedIn));
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
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            {userLoading || isSignedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/profile">
            {userLoading || isSignedIn ? <Profile /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/chat">
            {userLoading || isSignedIn ? <Chat /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Theme>
    </BrowserRouter>
  );
};

export default App;
