export type AppStateProps = {
  isLoading: boolean;
};

export type MovieProps = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type GetMoviesPayload = {
  year: string;
  title: string;
};

export type ListStateProps = {
  data: null | MovieProps[];
};
