import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Chat } from './types';

export const initialState: Chat = {
  selectedChatId: '',
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelectedChat: (state, action: PayloadAction<string>) => {
      state.selectedChatId = action.payload;
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
