import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppStateProps } from '../../types';

const initialState: AppStateProps = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;

export default appSlice.reducer;
