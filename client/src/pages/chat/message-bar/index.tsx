import React from 'react';
import SendImage from '../../../assets/chat/send.svg';
import { FlexFive } from '../../../shared/styles';
import { Container, MessageInput, SendIcon } from './styles';

export const MessageBar = () => {
  const [message, setMessage] = React.useState('');

  const onSend = () => {
    if (!message) return;
    setMessage('');
  };

  /**
   * Handles sending the message whenever pressing the 'enter' button.
   */
  const onKeyPress = (event: React.KeyboardEvent<EventTarget>) => {
    const { key } = event;
    if (key === 'Enter') {
      onSend();
    }
  };

  return (
    <Container>
      <MessageInput
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Your message here..."
        value={message}
      />
      <FlexFive />
      <SendIcon onClick={onSend} src={SendImage} />
    </Container>
  );
};
