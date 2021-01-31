import React from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '../../dashboard';
import { getUser } from '../../login';
import { Contact } from '../contact';
import { Container } from './styles';

export const ContactList = () => {
  const userData = useSelector(getUserData);
  const user = useSelector(getUser);
  return (
    <Container>
      {userData?.chatRooms.items.map((chatRoom) => {
        const { id } = chatRoom;
        if (chatRoom.businessOwner.id !== user?.username) {
          // add this contact between the business owner and this user (an investor)
          return <Contact key={id} id={id} location="" name={chatRoom.businessOwner.firstName} />;
        }
        if (chatRoom.investor.id !== user?.id) {
          // add this contact between the investor and this user (a business owner)
          return <Contact key={chatRoom.investor.id} id={id} location="" name={chatRoom.investor.firstName} />;
        }
        return null;
      })}
    </Container>
  );
};
