const GENRES_POSSIBLE = [
  { value: 'comedy', view: 'comedy' },
  { value: 'drama', view: 'drama' },
  { value: 'romance', view: 'romance' },
];

const SELECTORS = {
  releaseDate: 'release_date',
  budget: 'budget',
  voteAverage: 'vote_average',
  voteCount: 'vote_count',
  revenue: 'revenue',
};

const DEFAULT_MOVIE_DETAILS = {
  url: '',
  title: '',
  releaseDate: '',
  overview: '',
  runtime: '',
  voteAverage: '',
  tagline: '',
};

const GENRES = {
  all: 'all',
  action: 'action',
  adventure: 'adventure',
  animation: 'animation',
  comedy: 'comedy',
  crime: 'crime',
  documentary: 'documentary',
  drama: 'drama',
  family: 'family',
  fantasy: 'fantasy',
  history: 'history',
  horror: 'horror',
  music: 'music',
  mystery: 'mystery',
  romance: 'romance',
  scienceFiction: 'science fiction',
  thriller: 'thriller',
  tvMovie: 'tv movie',
  war: 'war',
  western: 'western',
};

const ICONS_CODES = {
  SEARCH: '\u2315',
};

const SORT_ORDER = {
  desc: 'desc',
  asc: 'asc',
};

const DEFAULT_MOVIE_FETCH_ARGS = {
  sortBy: SELECTORS.releaseDate,
  sortOrder: SORT_ORDER.desc,
  search: null,
  searchBy: null,
  filter: [],
  limit: 10,
  offset: 0,
};

const BASE_URL = 'http://localhost:4000';

export {
  GENRES_POSSIBLE,
  SELECTORS,
  DEFAULT_MOVIE_DETAILS,
  ICONS_CODES,
  GENRES,
  DEFAULT_MOVIE_FETCH_ARGS,
  BASE_URL,
  SORT_ORDER,
};
