import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Contact } from './contact';
import { Message } from './message';
import { Offer } from './offer';

const Chat = () => {
  const messager = true;
  const contactMessage = 'This was the last message sent..';
  const message = 'This is a test for a message.';
  const name = 'Pravat';
  const price = 250;
  const apy = 0.3;

  return (
    <div>
      <Contact message={contactMessage} name={name} selected />
      <Message messager={messager}>{message}</Message>
      <Message messager={messager}>
        <Offer messager={messager} name={name} price={price} apy={apy} />
      </Message>
    </div>
  );
};

export default withAuthenticator(Chat);
