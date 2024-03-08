import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../config/request';

type GetMoviesPayload = {
  title: string;
  year: string;
};

export const getMovies = createAsyncThunk(
  'list/getMovies',
  async ({ title, year }: GetMoviesPayload, thunkAPI) => {
    try {
      const resp = await axiosRequest(`&s=${title}&y=${year}`);
      if (resp.Response.True) {
        thunkAPI.fulfillWithValue(resp.Response.Search);
      } else {
        thunkAPI.rejectWithValue([]);
      }
    } catch (error) {
      thunkAPI.rejectWithValue([]);
    }
  }
);
