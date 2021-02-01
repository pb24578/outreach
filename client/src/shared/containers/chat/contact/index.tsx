import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactImage from '../../../../assets/chat/contact.png';
import { getSelectedChatId } from '../selectors';
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
  id: string;
  name: string;
  location: string;
  photo: string | null;
  onClick: () => void;
}

export const Contact = (props: ContactProps) => {
  const { id, location, name, photo, onClick } = props;
  const selectedChatId = useSelector(getSelectedChatId);
  const selected = id === selectedChatId;
  const contactIcon = photo ? <ContactIcon src={photo} /> : <ContactIcon src={ContactImage} />;
  return (
    <Container onClick={onClick}>
      <ContactContainer selected={selected}>
        <Profile>{contactIcon}</Profile>
        <ChatContent>
          <Name selected={selected}>{name}</Name>
          <BusinessLocation selected={selected}>{location}</BusinessLocation>
        </ChatContent>
      </ContactContainer>
      <ArrowRight selected={selected} />
    </Container>
  );
};
