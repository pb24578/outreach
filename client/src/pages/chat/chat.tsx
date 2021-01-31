import React from 'react';
import { Contact } from './contact';
import { Message } from './message';
import { Offer } from './offer';
import { MessageBar } from './message-bar';

const Chat = () => {
  const messager = true;
  const contactMessage = 'This was the last message sent..';
  const message = 'This is a test for a message.';
  const name = 'Pravat';
  const price = 250;
  const apy = 0.3;

  return (
    <div>
      <Contact location={contactMessage} name={name} selected />
      <Message messager={messager}>{message}</Message>
      <Message messager={messager}>
        <Offer messager={messager} name={name} price={price} apy={apy} />
      </Message>
      <MessageBar />
    </div>
  );
};

export default Chat;
