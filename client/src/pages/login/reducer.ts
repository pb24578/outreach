import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@aws-amplify/ui-components';

interface Login {
  authState: AuthState;
  user: any | undefined;
}

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
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
