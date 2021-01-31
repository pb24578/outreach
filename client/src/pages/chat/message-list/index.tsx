import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from '../message';
import { Offer } from '../offer';
import { Container } from './styles';
import { getChatRoom } from '../selectors';

export const MessageList = () => {
  const chatRoom = useSelector(getChatRoom);
  return (
    <Container>
      <Message messager>Hello World</Message>
      <Message messager={false}>
        <Offer messager={false} name="Fronrich" price={100} apy={0.3} />
      </Message>
      <Message messager>Hello World</Message>
      <Message messager>Hello World</Message>
      <Message messager>Hello World</Message>
      <Message messager>Hello World</Message>
      <Message messager>Hello World</Message>
      <Message messager>Hello World</Message>
      <Message messager={false}>Hello World</Message>
    </Container>
  );
};
