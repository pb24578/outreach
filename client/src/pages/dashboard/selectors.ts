import { createAsyncSelectorResults } from 'async-selector-kit';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../login';
import { BusinessOwner, Investor } from './types';

const getBusinessOwner = `
  query GetBusinessOwner($id: ID!) {
    getBusinessOwner(id: $id) {
      id
      firstName
      lastName
      businessName
      profilePicture
      minorityOwned
      certificate
      location
      bio
      storyBio
      tags
      chatRooms {
        items {
          id
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
              content
            }
          }
        }
      }
    }
  }
`;

const getInvestor = `
  query GetInvestor($id: ID!) {
    getInvestor(id: $id) {
      id
      firstName
      lastName
      profilePicture
      location
      minMaxLoan
      bio
      tags
      chatRooms {
        items {
          id
          investor {
            id
            firstName
            lastName
          }
          businessOwner {
            id
            firstName
            lastName
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
    }
  }
`;

export const [getUserData] = createAsyncSelectorResults(
  {
    id: 'get-user-data',
    async: async (user) => {
      const investorPromise = API.graphql(
        graphqlOperation(getInvestor, {
          id: user?.username,
        }),
      ) as Promise<any>;
      const businessOwnerPromise = API.graphql(
        graphqlOperation(getBusinessOwner, {
          id: user?.username,
        }),
      ) as Promise<any>;
      const [investor, businessOwner] = await Promise.all([investorPromise, businessOwnerPromise]);
      const investorData: Investor = investor.data.getInvestor;
      const businessOwnerData: BusinessOwner = businessOwner.data.getBusinessOwner;
      if (investorData) {
        return investorData;
      }
      if (businessOwnerData) {
        return businessOwnerData;
      }
      return undefined;
    },
    defaultValue: null,
  },
  [getUser],
);
