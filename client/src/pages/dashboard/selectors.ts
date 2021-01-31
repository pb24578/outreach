import { createAsyncSelectorResults } from 'async-selector-kit';
import { API, graphqlOperation } from 'aws-amplify';
import { Groups } from '../../shared/constants';
import { getUser, getGroups } from '../login';
import { BusinessOwner, Investor } from './types';

const getBusinessOwner = `
  query GetBusinessOwner($id: ID!) {
    getBusinessOwner(id: $id) {
      id
      firstName
      lastName
      businessName
      minorityOwned
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
    id: 'get-group',
    async: async (user, groups) => {
      if (groups.includes(Groups.INVESTOR)) {
        const investor: any = await API.graphql(
          graphqlOperation(getInvestor, {
            id: user?.username,
          }),
        );
        const investorData: Investor = investor.data.getInvestor;
        return investorData;
      }
      if (groups.includes(Groups.BUSINESS_OWNER)) {
        const businessOwner: any = await API.graphql(
          graphqlOperation(getBusinessOwner, {
            id: user?.username,
          }),
        );
        const businessOwnerData: BusinessOwner = businessOwner.data.getBusinessOwner;
        return businessOwnerData;
      }
      return null;
    },
    defaultValue: null,
  },
  [getUser, getGroups],
);
