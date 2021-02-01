/* eslint-disable no-console */
import { API, graphqlOperation } from 'aws-amplify';
import { createAsyncAction } from 'async-selector-kit';
import { actions as loginActions, getUser, getUserData, isInvestor } from '../../../pages/login';
import { ChatRoom } from './types';
import { getChatRoom } from './selectors';
import { actions } from './reducer';

const { addMessage } = actions;
const { addChatRoom } = loginActions;

const createChatRoomMutation = `
  mutation CreateChatRoom($input: CreateChatRoomInput!) {
    createChatRoom(input: $input) {
      id
      businessOwner {
        id
        firstName
        lastName
        location
        profilePicture
        certificate
      }
      investor {
        id
        firstName
        lastName
        location
        profilePicture
      }
      messages {
        items {
          id
          senderId
          content
        }
      }
    }
  }
`;

const createMessageMutation = `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      chatRoom {
        businessOwner {
          id
          firstName
          lastName
        }
        investor {
          id
          firstName
          lastName
        }
      }
      id
      senderId
      createdAt
    }
  }
`;

export const [createChatRoom] = createAsyncAction(
  {
    id: 'create-chat-room',
    async: (store, status, user, userData) => async (otherUserId: string) => {
      if (!user) return;
      try {
        const chatRoomInvestorId = isInvestor(userData) ? user.username : otherUserId;
        const chatRoomBusinessOwnerId = isInvestor(userData) ? otherUserId : user.username;
        const createChatRoom: any = await API.graphql(
          graphqlOperation(createChatRoomMutation, {
            input: { chatRoomBusinessOwnerId, chatRoomInvestorId },
          }),
        );
        const chatRoom: ChatRoom = createChatRoom.data.createChatRoom;
        store.dispatch(addChatRoom(chatRoom));
      } catch (e) {
        console.error('Could not create the chat room": ', e);
      }
    },
  },
  [getUser, getUserData],
);

export const [createMessage] = createAsyncAction(
  {
    id: 'create-message',
    async: (store, status, user, chatRoom) => async (content: string) => {
      if (!user || !chatRoom) return;
      const senderId = user.username || '';
      try {
        store.dispatch(addMessage({ senderId, content }));
        await API.graphql(
          graphqlOperation(createMessageMutation, {
            input: { senderId, content, messageChatRoomId: chatRoom.id },
          }),
        );
      } catch (e) {
        console.error('Could not send the chat message": ', e);
      }
    },
  },
  [getUser, getChatRoom],
);
