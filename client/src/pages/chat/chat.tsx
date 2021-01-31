import React from 'react';
import { FlexColumn } from '../../shared/styles';
import { ContactList } from './contact-list';
import { MessageList } from './message-list';
import { MessageBar } from './message-bar';
import { Container } from './styles';

const Chat = () => (
  <Container>
    <ContactList />
    <FlexColumn>
      <MessageList />
      <MessageBar />
    </FlexColumn>
  </Container>
);

export default Chat;
