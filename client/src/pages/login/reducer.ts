import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@aws-amplify/ui-components';
import jwtDecode from 'jwt-decode';
import { Groups } from '../../shared/constants';
import { Login } from './types';

export const initialState: Login = {
  authState: AuthState.SignIn,
  user: undefined,
  groups: [],
  investor: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      state.authState = action.payload;
    },
    setUser: (state, action: PayloadAction<any | undefined>) => {
      state.user = action.payload;
      if (state.user?.signInUserSession?.idToken.jwtToken) {
        // decode and set the user's groups
        type CognitoGroups = { ['cognito:groups']: string[] };
        const decoded = jwtDecode<CognitoGroups>(state.user?.signInUserSession?.idToken.jwtToken);
        state.investor = decoded['cognito:groups'].includes(Groups.INVESTOR);
      }
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
