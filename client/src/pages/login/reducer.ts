import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@aws-amplify/ui-components';
import { Login, SetUserPayload } from './types';
import { Investor, BusinessOwner } from '../dashboard';

export const initialState: Login = {
  authState: AuthState.SignIn,
  user: undefined,
  userData: undefined,
  userLoaded: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.userLoaded = true;
      if (!action.payload.user) {
        // logging off the user
        state.authState = initialState.authState;
        state.user = initialState.user;
        state.userData = initialState.userData;
        return;
      }
      state.authState = action.payload.authState;
      state.user = action.payload.user;
      state.userData = action.payload.userData;
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
