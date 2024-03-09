import { MovieProps } from '.';

export type SearchResultsProps = {
  isLoading: boolean;
  data: null | MovieProps[];
};

export type MovieListItemProps = {
  data: MovieProps;
};
