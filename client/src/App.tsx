import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Theme from './shared/styles/theme';
import { Landing } from './pages/landing';
import { Dashboard } from './pages/dashboard';
import { Profile } from './pages/profile';
import { Chat } from './pages/chat';

const App = () => (
  <BrowserRouter>
    <Theme>
      <Switch>
        <Route exact path="/">
          <Landing />
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
