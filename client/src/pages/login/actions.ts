import { API, Auth, graphqlOperation } from 'aws-amplify';
import { AuthState } from '@aws-amplify/ui-components';
import { createAsyncAction } from 'async-selector-kit';
import { BusinessOwner, Investor } from '../dashboard/types';
import { CognitoUser } from './types';
import { getBusinessOwner, getInvestor } from './selectors';
import { actions } from './reducer';

const { setUser } = actions;

/**
 * Returns the user's credentials if the user is logged in.
 */
const getUserCredentials = async () => {
  try {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();
    return user;
  } catch {
    return undefined;
  }
};

export const loadUserData = async (user: CognitoUser | undefined) => {
  if (!user) {
    return undefined;
  }
  const investorPromise = API.graphql(
    graphqlOperation(getInvestor, {
      id: user.username,
    }),
  ) as Promise<any>;
  const businessOwnerPromise = API.graphql(
    graphqlOperation(getBusinessOwner, {
      id: user.username,
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
};

/**
 * Loads the user and updates the state if the user is signed-in.
 */
export const [setUserState] = createAsyncAction({
  id: 'set-user-state',
  async: (store) => async () => {
    const user = await getUserCredentials();
    const userData = await loadUserData(user);
    const authState = user ? AuthState.SignedIn : AuthState.SignIn;
    store.dispatch(setUser({ authState, user, userData }));
  },
});
