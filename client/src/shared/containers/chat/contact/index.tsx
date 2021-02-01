import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactImage from '../../../../assets/chat/contact.png';
import { getSelectedChatId } from '../selectors';
import { actions } from '../reducer';
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
}

const { setSelectedChat } = actions;

export const Contact = (props: ContactProps) => {
  const { id, location, name, photo } = props;
  const dispatch = useDispatch();
  const selectedChatId = useSelector(getSelectedChatId);
  const selected = id === selectedChatId;

  /**
   * Called whenever the contact has been selected.
   */
  const onSelectContact = () => {
    dispatch(setSelectedChat(id));
  };

  const contactIcon = photo ? <ContactIcon src={photo} /> : <ContactIcon src={ContactImage} />;

  return (
    <Container onClick={onSelectContact}>
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
