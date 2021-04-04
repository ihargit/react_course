const  GENRES_POSSIBLE = [
  { value: 'comedy', view: 'comedy' },
  { value: 'drama', view: 'drama' },
  { value: 'romance', view: 'romance' },
];

const SELECTORS = [
  { value: 'release_date', view: 'release date' },
  { value: 'budget', view: 'budget' },
  { value: 'vote_average', view: 'vote average' },
  { value: 'vote_count', view: 'vote count' },
  { value: 'revenue', view: 'revenue' },
];

const DEFAULT_MOVIE_DETAILS = {
  url: '',
  title: '',
  releaseDate: '',
  overview: '',
  runtime: '',
  voteAverage: '',
  tagline: '',
};

const GENRES = [
  'all', 'action', 'adventure', 'animation', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'history', 'horror', 'music', 'mystery', 'romance', 'science fiction', 'thriller', 'tv movie', 'war', 'western'
]

const ICONS_CODES = {
  SEARCH: '\u2315'
}

const DEFAULT_GENRE = 'all';

export { GENRES_POSSIBLE, SELECTORS, DEFAULT_GENRE, DEFAULT_MOVIE_DETAILS, ICONS_CODES, GENRES };