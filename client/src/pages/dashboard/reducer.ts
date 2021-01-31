import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  businessOwner: null,
  investor: null,
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setBusinessOwner: (state, action: PayloadAction<any>) => {
      state.businessOwner = action.payload;
    },
    setInvestor: (state, action: PayloadAction<any>) => {
      state.investor = action.payload;
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
