import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Dashboard } from './types';

export const initialState: Dashboard = {
  selectedChatId: '',
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedChat: (state, action: PayloadAction<string>) => {
      state.selectedChatId = action.payload;
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
