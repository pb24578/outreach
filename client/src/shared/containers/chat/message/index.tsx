import React from 'react';
import { ArrowBottom, Container, MessageContainer } from './styles';

interface ContactProps {
  messager: boolean;
  children?: React.ReactElement | string;
}

export const Message = (props: ContactProps) => {
  const { children, messager } = props;

  let message = children;
  if (typeof children === 'string') {
    message = <MessageContainer>{message}</MessageContainer>;
  }

  return (
    <Container messager={messager}>
      {message}
      <ArrowBottom messager={messager} />
    </Container>
  );
};
