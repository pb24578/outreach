import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './shared/styles/global.css';
import Amplify from 'aws-amplify';
import Theme from './shared/styles/theme';
import Landing from './pages/landing';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Chat from './pages/chat';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => (
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
          <Dashboard />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Theme>
  </BrowserRouter>
);

export default App;
