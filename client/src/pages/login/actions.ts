import { Auth } from 'aws-amplify';
import { AuthState } from '@aws-amplify/ui-components';
import { createAsyncAction } from 'async-selector-kit';
import { CognitoUser } from './types';
import { actions } from './reducer';

const { setUser, setUserLoaded } = actions;

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

/**
 * Loads the user and updates the state if the user is signed-in.
 */
export const [setUserState] = createAsyncAction({
  id: 'set-user-state',
  async: (store) => async () => {
    const user = await getUserCredentials();
    if (user) {
      store.dispatch(setUser({ authState: AuthState.SignedIn, user }));
    }
    // finished loading the user, so set the loaded state
    store.dispatch(setUserLoaded(true));
  },
});
