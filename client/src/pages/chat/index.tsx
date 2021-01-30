import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Contact } from './contact';

const Chat = () => (
  <div>
    <Contact message="This was the last message sent..." name="Name Here" selected />
  </div>
);

export default withAuthenticator(Chat);
