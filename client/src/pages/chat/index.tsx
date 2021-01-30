import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Contact } from './contact';
import { Message } from './message';

const Chat = () => (
  <div>
    <Contact message="This was the last message sent..." name="Name Here" selected />
    <Message messager message="Hello World!" />
  </div>
);

export default withAuthenticator(Chat);
