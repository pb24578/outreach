import { API, graphqlOperation } from 'aws-amplify';
import { createAsyncAction } from 'async-selector-kit';
import { actions } from '../login';

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

