import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@aws-amplify/ui-components';
import { Login } from './types';

export const initialState: Login = {
  authState: AuthState.SignIn,
  user: undefined,
  userLoaded: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ authState: AuthState; user: any | undefined }>) => {
      if (!action.payload.user) {
        // logging off the user
        state.authState = initialState.authState;
        state.user = initialState.user;
        return;
      }
      state.authState = action.payload.authState;
      state.user = action.payload.user;
    },
    setUserLoaded: (state, action: PayloadAction<boolean>) => {
      state.userLoaded = action.payload;
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
