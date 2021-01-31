import React from 'react';
import { ContactList } from './contact-list';
import { MessageList } from './message-list';
import { MessageBar } from './message-bar';
import { Container, ContactContainer, MessageContainer } from './styles';

const Chat = () => (
  <Container>
    <ContactContainer>
      <ContactList />
    </ContactContainer>
    <MessageContainer>
      <MessageList />
      <MessageBar />
    </MessageContainer>
  </Container>
);

export default Chat;
