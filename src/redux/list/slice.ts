import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ListStateProps, MovieProps } from '../../types';

const initialState: ListStateProps = {
  data: null,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<null | MovieProps[]>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = listSlice.actions;

export default listSlice.reducer;
