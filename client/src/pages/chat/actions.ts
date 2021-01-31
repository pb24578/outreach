import { API, graphqlOperation } from 'aws-amplify';
import { createAsyncAction } from 'async-selector-kit';
import { actions } from '../login';

const getChatRoomList = `
  query CreateBusinessOwner($input: CreateBusinessOwnerInput!) {
    createBusinessOwner(input: $input) {
      id
      firstName
      lastName
      businessName
      bio
      storyBio
      tags
    }
  }
`;
