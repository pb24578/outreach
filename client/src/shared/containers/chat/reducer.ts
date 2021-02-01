import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Chat, Message } from './types';

export const initialState: Chat = {
  selectedChatId: '',
  recentMessages: [],
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelectedChat: (state, action: PayloadAction<string>) => {
      state.selectedChatId = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.recentMessages.push(action.payload);
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
