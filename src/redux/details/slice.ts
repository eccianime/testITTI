import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DetailsStateProps, MovieDetailsProps } from '../../types';

const initialState: DetailsStateProps = {
  data: undefined,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<MovieDetailsProps | undefined>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = detailsSlice.actions;

export default detailsSlice.reducer;
