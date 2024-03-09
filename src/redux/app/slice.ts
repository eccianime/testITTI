import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppStateProps } from '../../types';
import { getMovies } from '../list/actions';

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
  extraReducers: (builder) =>
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(getMovies.settled, (state) => {
        state.isLoading = false;
      }),
});

export const { setLoading } = appSlice.actions;

export default appSlice.reducer;
