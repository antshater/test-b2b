export interface OmdbFilm {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: OmdbFilmRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export interface OmdbFilmRating {
  Source: string;
  Value: string;
}

export interface ObmdbSearchResponse {
  Response: 'True' | 'False';
  Search: OmdbFilm[];
}

export interface ObdbByIdResponse extends OmdbFilm {
  Response: 'True' | 'False';
}
