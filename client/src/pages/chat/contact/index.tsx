import React from 'react';
import { ContactImage } from '../../../assets';
import {
  ArrowRight,
  ChatContent,
  Container,
  ContactContainer,
  ContactIcon,
  Name,
  RecentMessage,
  Profile,
} from './styles';

interface ContactProps {
  selected: boolean;
  name: string;
  message: string;
}

export const Contact = (props: ContactProps) => {
  const { message, name, selected } = props;
  return (
    <Container>
      <ContactContainer selected={selected}>
        <Profile>
          <ContactIcon src={ContactImage} />
        </Profile>
        <ChatContent>
          <Name selected={selected}>{name}</Name>
          <RecentMessage selected={selected}>{message}</RecentMessage>
        </ChatContent>
      </ContactContainer>
      <ArrowRight selected={selected} />
    </Container>
  );
};
