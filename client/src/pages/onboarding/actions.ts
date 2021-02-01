/* eslint-disable max-len */
/* eslint-disable no-console */
import { API, graphqlOperation } from 'aws-amplify';
import { createAsyncAction } from 'async-selector-kit';
import { CognitoUser } from '../login';

const createBusinessOwnerMutation = `
  mutation CreateBusinessOwner($input: CreateBusinessOwnerInput!) {
    createBusinessOwner(input: $input) {
      id
    }
  }
`;

const createInvestorMutation = `
  mutation CreateInvestor($input: CreateInvestorInput!) {
    createInvestor(input: $input) {
      id
    }
  }
`;

export const [createBusinessOwner] = createAsyncAction({
  id: 'create-business-owner',
  async: () => async (businessOwnerInput: object, user: CognitoUser | undefined) => {
    try {
      await API.graphql(
        graphqlOperation(createBusinessOwnerMutation, {
          input: { id: user?.username, ...businessOwnerInput },
        }),
      );
    } catch (e) {
      console.error('Error creating business owner: ', e);
    }
  },
});

export const [createInvestor] = createAsyncAction({
  id: 'create-investor',
  async: () => async (investorInput: object, user: CognitoUser | undefined) => {
    try {
      await API.graphql(
        graphqlOperation(createInvestorMutation, {
          input: { id: user?.username, ...investorInput },
        }),
      );
    } catch (e) {
      console.error('Error creating investor: ', e);
    }
  },
});
