import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../config/request';
import { MovieProps } from '../../types';
import { setData } from './slice';

type GetMoviesPayload = {
  title: string;
  year: string;
};

export const getMovies = createAsyncThunk(
  'list/getMovies',
  async ({ title, year }: GetMoviesPayload, thunkAPI) => {
    try {
      const resp = await axiosRequest(`&s=${title.toLowerCase()}&y=${year}`);
      if (resp?.Response === 'True') {
        console.log('true');
        thunkAPI.dispatch(setData(resp.Search));
      } else {
        console.log('false');
        thunkAPI.dispatch(setData([]));
      }
    } catch (error) {
      console.log(error);
      console.log('error');
      thunkAPI.dispatch(setData([]));
    }
  }
);
