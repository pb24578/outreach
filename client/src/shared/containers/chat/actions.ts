/* eslint-disable no-console */
import { API, graphqlOperation } from 'aws-amplify';
import { createAsyncAction } from 'async-selector-kit';
import { getUser } from '../../../pages/login';
import { getChatRoom } from './selectors';
import { actions } from './reducer';

const { addMessage } = actions;

const createChatRoomMutation = `
  mutation CreateChatRoom($input: CreateChatRoomInput!) {
    createChatRoom(input: $input) {
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
      messages {
        items {
          id
          senderId
          createdAt
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
