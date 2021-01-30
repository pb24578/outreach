import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Profile = () => (
  <div>
    <AmplifySignOut />
    Hello World!
  </div>
);

export default withAuthenticator(Profile);
