import { Auth } from 'aws-amplify';

/**
 * 
 * Returns the user's credentials if the user is logged in.
 */
export const getUserCredentials = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch {
    return undefined;
  }
};
