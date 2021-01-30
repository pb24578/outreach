import React from 'react';
import { Container } from './styles';

interface ContactProps {
  messager: boolean;
  message: string;
}

export const Message = (props: ContactProps) => {
  const { messager, message } = props;
  return <Container messager={messager}>{message}</Container>;
};
