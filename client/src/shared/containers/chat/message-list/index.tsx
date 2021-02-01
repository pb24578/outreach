import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../../pages/login';
import { Message } from '../message';
import { Container } from './styles';
import { getChatRoom } from '../selectors';

export const MessageList = () => {
  const chatRoom = useSelector(getChatRoom);
  const user = useSelector(getUser);
  return (
    <Container>
      {chatRoom?.messages.items.map((message) => {
        const messager = message.senderId === user?.username;
        return (
          <Message key={message.senderId} messager={messager}>
            {message.content}
          </Message>
        );
      })}
    </Container>
  );
};
