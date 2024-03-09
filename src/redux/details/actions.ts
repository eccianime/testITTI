import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../config/request';
import { setData } from './slice';
import { GetMovieDetailsPayload } from '../../types';

export const getMovieDetails = createAsyncThunk(
  'details/getMovieDetails',
  async ({ imdbID }: GetMovieDetailsPayload, thunkAPI) => {
    try {
      const resp = await axiosRequest(`&i=${imdbID}&plot=full`);
      if (resp?.Response === 'True') {
        thunkAPI.dispatch(setData(resp));
      } else {
        thunkAPI.dispatch(setData());
      }
    } catch (error) {
      thunkAPI.dispatch(setData());
    }
  }
);
