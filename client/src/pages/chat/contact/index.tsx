import React from 'react';
import ContactImage from '../../../assets/chat/contact.png';
import {
  ArrowRight,
  BusinessLocation,
  ChatContent,
  Container,
  ContactContainer,
  ContactIcon,
  Name,
  Profile,
} from './styles';

interface ContactProps {
  selected: boolean;
  name: string;
  location: string;
}

export const Contact = (props: ContactProps) => {
  const { location, name, selected } = props;
  return (
    <Container>
      <ContactContainer selected={selected}>
        <Profile>
          <ContactIcon src={ContactImage} />
        </Profile>
        <ChatContent>
          <Name selected={selected}>{name}</Name>
          <BusinessLocation selected={selected}>{location}</BusinessLocation>
        </ChatContent>
      </ContactContainer>
      <ArrowRight selected={selected} />
    </Container>
  );
};
