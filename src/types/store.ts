import { AppStateProps, ListStateProps } from '.';
import store from '../redux';

export type AppState = {
  app: AppStateProps;
  list: ListStateProps;
  //   details: DetailsStateProps;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
