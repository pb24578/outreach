import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BusinessOwner, Investor } from '../dashboard';

export const initialState: { businessOwner: BusinessOwner | null; investor: Investor | null } = {
  businessOwner: null,
  investor: null,
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setBusinessOwner: (state, action: PayloadAction<BusinessOwner>) => {
      state.businessOwner = action.payload;
    },
    setInvestor: (state, action: PayloadAction<Investor>) => {
      state.investor = action.payload;
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
