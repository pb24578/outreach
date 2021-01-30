import { Auth } from 'aws-amplify';
import { CognitoUser } from './types';

/**
 * Returns the user's credentials if the user is logged in.
 */
export const getUserCredentials = async (): Promise<CognitoUser | undefined> => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch {
    return undefined;
  }
};
