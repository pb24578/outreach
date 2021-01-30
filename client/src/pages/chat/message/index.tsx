import React from 'react';
import { ArrowBottom, Container, MessageContainer } from './styles';

interface ContactProps {
  messager: boolean;
  message: string;
}

export const Message = (props: ContactProps) => {
  const { messager, message } = props;
  return (
    <Container>
      <MessageContainer messager={messager}>{message}</MessageContainer>
      <ArrowBottom messager={messager} />
    </Container>
  );
};
