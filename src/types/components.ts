import { MovieProps } from '.';

export type SearchResultsProps = {
  isLoading: boolean;
  data: null | MovieProps[];
};

export type MovieListItemProps = {
  data: MovieProps;
};

export type TitleAndDescriptionProps = {
  title: string;
  description: string;
};

export type TitleAndListProps = {
  title: string;
  stringList: string;
};
