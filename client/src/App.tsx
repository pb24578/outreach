import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './shared/styles/global.css';
import Amplify, { Auth } from 'aws-amplify';
import Theme from './shared/styles/theme';
import Landing from './pages/landing';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Chat from './pages/chat';
import awsconfig from './aws-exports';

const checkIfSignedIn = async () => {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return false;
  }
};

Amplify.configure(awsconfig);

const App = () => {
  const [signedIn, setSignedIn] = useState(true);
  const setSignedInState = async () => {
    setSignedIn(await checkIfSignedIn());
  };

  useEffect(() => {
    setSignedInState();
  }, []);

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
            {signedIn ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/profile">
            {signedIn ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/chat">
            {signedIn ? <Chat /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Theme>
    </BrowserRouter>
  );
};

export default App;
