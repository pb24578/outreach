import React, { createRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../../pages/login';
import { Message } from '../message';
import { Container } from './styles';
import { getChatRoom, getRecentMessages } from '../selectors';

export const MessageList = () => {
  const chatRoom = useSelector(getChatRoom);
  const recentMessages = useSelector(getRecentMessages);
  const user = useSelector(getUser);
  const messages = [...(chatRoom?.messages.items || []), ...recentMessages];

  /**
   * Scroll to the bottom of the chat whenever texting.
   */
  const chatRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (chatRef && chatRef.current) {
      const ref = chatRef.current;
      ref.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Container ref={chatRef}>
      {messages.map((message) => {
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
