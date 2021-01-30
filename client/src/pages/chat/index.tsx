import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Contact } from './contact';

const Chat = () => (
  <div>
    <Contact selected />
  </div>
);

export default withAuthenticator(Chat);
