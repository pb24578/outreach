import { API, graphqlOperation } from 'aws-amplify';
import { createAsyncSelectorResults } from 'async-selector-kit';
import { ChatRoom } from './types';

const getChatRoomQuery = `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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

export const [getChatRoom] = createAsyncSelectorResults(
  {
    id: 'get-chat-room',
    async: async () => {
      const chatRoomId = 'fea5f5f4-32a7-4d7f-acb9-27e19b6a3935';
      const chatRoom: any = await API.graphql(
        graphqlOperation(getChatRoomQuery, {
          id: chatRoomId,
        }),
      );
      const chatRoomData: ChatRoom = chatRoom.data.getChatRoom;
      return chatRoomData;
    },
    defaultValue: null,
  },
  [],
);
