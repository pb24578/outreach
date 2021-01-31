/* eslint-disable max-len */
/* eslint-disable no-console */
import { API, graphqlOperation } from 'aws-amplify';
import AWS from 'aws-sdk';
import { CognitoUser } from '../login/types';
import { Groups } from '../../shared/constants';

const createBusinessOwnerMutation = `
  mutation CreateBusinessOwner($input: CreateBusinessOwnerInput!) {
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

const createInvestorMutation = `
  mutation CreateInvestor($input: CreateInvestorInput!) {
    createInvestor(input: $input) {
      id
      firstName
      lastName
      minMaxLoan
      bio
      tags
    }
  }
`;

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});
const cognito = new AWS.CognitoIdentityServiceProvider();

/**
 * Creates a BusinessOwner in the DynamoDB table
 */
export const createBusinessOwner = async (businessOwnerInput: object, user: CognitoUser | undefined) => {
  try {
    const businessOwner: any = await API.graphql(
      graphqlOperation(createBusinessOwnerMutation, {
        input: { id: user?.username, ...businessOwnerInput },
      }),
    );
    const businessOwnerData = businessOwner.data.createBusinessOwner;
    if (user && user.pool && user.pool.userPoolId && user.username) {
      const cognitoParams = {
        UserPoolId: user.pool.userPoolId,
        Username: user.username,
        GroupName: Groups.BUSINESS_OWNER,
      };
      cognito.adminAddUserToGroup(cognitoParams, () => {});
    }
  } catch (e) {
    console.error('Error creating business owner: ', e);
  }
};

/**
 * Creates an Investor in the DynamoDB table
 */
export const createInvestor = async (investorInput: object, user: CognitoUser | undefined) => {
  try {
    const investor: any = await API.graphql(
      graphqlOperation(createInvestorMutation, {
        input: { id: user?.username, ...investorInput },
      }),
    );
    const investorData = investor.data.createInvestor;
    if (user && user.pool && user.pool.userPoolId && user.username) {
      const cognitoParams = {
        UserPoolId: user.pool.userPoolId,
        Username: user.username,
        GroupName: Groups.INVESTOR,
      };
      cognito.adminAddUserToGroup(cognitoParams, () => {});
    }
  } catch (e) {
    console.error('Error creating investor: ', e);
  }
};
