/* eslint-disable no-console */
import { API, graphqlOperation } from 'aws-amplify';

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

/**
 * Creates a BusinessOwner in the DynamoDB table
 */
export const createBusinessOwner = async (businessOwnerInput: object) => {
  try {
    const businessOwner: any = await API.graphql(
      graphqlOperation(createBusinessOwnerMutation, {
        input: { ...businessOwnerInput },
      }),
    );
    const businessOwnerData = businessOwner.data.createBusinessOwner;
    console.log(businessOwnerData);
  } catch (e) {
    console.error('Error creating business owner: ', e);
  }
};

/**
 * Creates an Investor in the DynamoDB table
 */
export const createInvestor = async (investorInput: object) => {
  try {
    const investor: any = await API.graphql(
      graphqlOperation(createInvestorMutation, {
        input: { ...investorInput },
      }),
    );
    const investorData = investor.data.createInvestor;
    console.log(investorData);
  } catch (e) {
    console.error('Error creating investor: ', e);
  }
};
