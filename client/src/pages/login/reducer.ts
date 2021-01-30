import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@aws-amplify/ui-components';
import jwtDecode from 'jwt-decode';
import { Login } from './types';

export const initialState: Login = {
  authState: AuthState.SignIn,
  user: undefined,
  groups: [],
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
        state.groups = decoded['cognito:groups'];
      }
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
