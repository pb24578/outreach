/* eslint-disable max-len */
/* eslint-disable no-console */
import { API, graphqlOperation } from 'aws-amplify';
import { createAsyncAction } from 'async-selector-kit';
import { actions as loginActions, CognitoUser } from '../login';
import { BusinessOwner, Investor } from '../dashboard';

const { setUserData } = loginActions;

const createBusinessOwnerMutation = `
  mutation CreateBusinessOwner($input: CreateBusinessOwnerInput!) {
    createBusinessOwner(input: $input) {
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

const createInvestorMutation = `
  mutation CreateInvestor($input: CreateInvestorInput!) {
    createInvestor(input: $input) {
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

export const [createBusinessOwner] = createAsyncAction({
  id: 'create-business-owner',
  async: (store) => async (businessOwnerInput: object, user: CognitoUser | undefined) => {
    try {
      const newBusinessOwner: any = await API.graphql(
        graphqlOperation(createBusinessOwnerMutation, {
          input: { id: user?.username, ...businessOwnerInput },
        }),
      );
      const businessOwnerData: BusinessOwner = newBusinessOwner.data.createBusinessOwner;
      store.dispatch(setUserData(businessOwnerData));
    } catch (e) {
      console.error('Error creating business owner: ', e);
    }
  },
});

export const [createInvestor] = createAsyncAction({
  id: 'create-investor',
  async: (store) => async (investorInput: object, user: CognitoUser | undefined) => {
    try {
      const newInvestor: any = await API.graphql(
        graphqlOperation(createInvestorMutation, {
          input: { id: user?.username, ...investorInput },
        }),
      );
      const investorData: Investor = newInvestor.data.createInvestor;
      store.dispatch(setUserData(investorData));
    } catch (e) {
      console.error('Error creating investor: ', e);
    }
  },
});
