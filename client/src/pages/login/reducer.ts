import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, CognitoUserInterface } from '@aws-amplify/ui-components';
import { CognitoUser, Login } from './types';

export const initialState: Login = {
  authState: AuthState.SignIn,
  user: undefined,
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
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
