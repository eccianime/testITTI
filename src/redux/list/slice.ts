import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ListStateProps, MovieProps } from '../../types';
import { getMovies } from '../list/actions';

const initialState: ListStateProps = {
  data: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<MovieProps[]>) {
      state.data = action.payload;
    },
  },
  //   extraReducers: (builder) =>
  //     builder
  //       .addCase(getMovies.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addMatcher(getMovies.settled, (state) => {
  //         state.isLoading = false;
  //       }),
});

export const { setData } = listSlice.actions;

export default listSlice.reducer;
