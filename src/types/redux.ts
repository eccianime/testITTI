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

export type GetMovieDetailsPayload = {
  imdbID: string;
};

export type ListStateProps = {
  data: null | MovieProps[];
};

export type MovieDetailsProps = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

export type DetailsStateProps = {
  data?: MovieDetailsProps;
};
