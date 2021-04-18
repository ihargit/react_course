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

const GENRES_ALL = 'all';

const GENRES = [
  'adventure',
  'animation',
  'comedy',
  'crime',
  'documentary',
  'drama',
  'family',
  'fantasy',
  'history',
  'horror',
  'music',
  'mystery',
  'romance',
  'science fiction',
  'thriller',
  'tv movie',
  'war',
  'western',
];

const ICONS_CODES = {
  SEARCH: '\u2315',
};

const SORT_ORDER = {
  desc: 'desc',
  asc: 'asc',
};

const MODALS = {
  add: 'add',
  edit: 'edit',
  delete: 'delete',
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
  GENRES_ALL,
  SELECTORS,
  DEFAULT_MOVIE_DETAILS,
  ICONS_CODES,
  GENRES,
  DEFAULT_MOVIE_FETCH_ARGS,
  BASE_URL,
  SORT_ORDER,
  MODALS,
};
