import React from 'react';
import { Link } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';

const Dashboard = () => (
  <div>
    <Link to="/profile">To Profile</Link>
  </div>
);

export default withAuthenticator(Dashboard);
