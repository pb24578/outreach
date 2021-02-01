import React from 'react';
import { useSelector } from 'react-redux';
import { ContactList } from './contact-list';
import { MessageList } from './message-list';
import { MessageBar } from './message-bar';
import { Container, ContactContainer, MessageContainer } from './styles';
import { getChatRoom } from './selectors';

const Chat = () => {
  const chatRoom = useSelector(getChatRoom);
  return (
    <Container>
      <ContactContainer>
        <ContactList />
      </ContactContainer>
      {chatRoom && (
        <MessageContainer>
          <MessageList />
          <MessageBar />
        </MessageContainer>
      )}
    </Container>
  );
};

export default Chat;
