import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserData } from '../../../../pages/login';
import { Contact } from '../contact';
import { actions } from '../reducer';
import { Container } from './styles';

const { setSelectedChat } = actions;

export const ContactList = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const user = useSelector(getUser);

  /**
   * Called whenever the contact has been selected.
   */
  const onSelectContact = (id: string) => {
    dispatch(setSelectedChat(id));
  };

  return (
    <Container>
      {userData?.chatRooms.items.map((chatRoom) => {
        const { id } = chatRoom;
        if (chatRoom.businessOwner.id !== user?.username) {
          // add this contact between the business owner and this user (an investor)
          return (
            <Contact
              key={id}
              id={id}
              location={chatRoom.businessOwner.location}
              name={chatRoom.businessOwner.firstName}
              photo={chatRoom.businessOwner.profilePicture}
              onClick={() => onSelectContact(id)}
            />
          );
        }
        if (chatRoom.investor.id !== user?.id) {
          // add this contact between the investor and this user (a business owner)
          return (
            <Contact
              key={chatRoom.investor.id}
              id={id}
              location={chatRoom.investor.location}
              name={chatRoom.investor.firstName}
              photo={chatRoom.investor.profilePicture}
              onClick={() => onSelectContact(id)}
            />
          );
        }
        return null;
      })}
    </Container>
  );
};
