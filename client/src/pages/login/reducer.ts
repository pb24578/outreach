import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@aws-amplify/ui-components';
import { BusinessOwner, Investor, Login, SetUserPayload } from './types';
import { ChatRoom } from '../../shared/containers/chat';

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
    addChatRoom: (state, action: PayloadAction<ChatRoom>) => {
      state.userData?.chatRooms.items.push(action.payload);
    },
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
    setUserData: (state, action: PayloadAction<Investor | BusinessOwner>) => {
      state.userData = action.payload;
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
