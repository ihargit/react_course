const getGenres = (moviesData) => {
  const allGenres = { all: true };
  moviesData.forEach(({ genres }) =>
    (genres || []).forEach((genre) => {
      const genreLower = genre.toLowerCase();
      if (!allGenres[genreLower]) {
        allGenres[genreLower] = true;
      }
    })
  );
  return Object.keys(allGenres).sort();
};

const getMoviesToDisplayData = (data) =>
  data.map(
    ({
      poster_path,
      title,
      genres = [],
      release_date,
      id,
      overview,
      runtime,
      vote_average,
      tagline,
    }) => ({
      url: poster_path || undefined,
      title,
      genre: genres.join(',') || undefined,
      releaseDate: release_date || undefined,
      id,
      overview,
      runtime,
      voteAverage: vote_average,
      tagline,
    })
  );

const getMoviesToDisplay = (moviesData, genre = 'all', selector) => {
  const genreLower = String(genre).toLowerCase();
  return moviesData
    .filter(
      (movie) =>
        genreLower === 'all' ||
        (movie.genres &&
          !!movie.genres.find(
            (genreAny) => genreAny.toLowerCase() === genreLower
          ))
    )
    .sort((a, b) => b[selector] - a[selector]);
};

export { getGenres, getMoviesToDisplayData, getMoviesToDisplay };
