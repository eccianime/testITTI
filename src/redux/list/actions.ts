import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../config/request';
import { setData } from './slice';
import { GetMoviesPayload } from '../../types';

export const getMovies = createAsyncThunk(
  'list/getMovies',
  async ({ title, year }: GetMoviesPayload, thunkAPI) => {
    try {
      const resp = await axiosRequest(`&s=${title.toLowerCase()}&y=${year}`);
      if (resp?.Response === 'True') {
        thunkAPI.dispatch(setData(resp.Search));
      } else {
        thunkAPI.dispatch(setData([]));
      }
    } catch (error) {
      thunkAPI.dispatch(setData([]));
    }
  }
);
