const getGenres = (moviesData) => {
  const allGenres = {};
  moviesData.forEach(({ genres }) =>
    (genres || []).forEach((genre) => {
      const genreLower = genre.toLowerCase();
      if (!allGenres[genreLower]) {
        allGenres[genreLower] = true;
      }
    })
  );
  return ['all'].concat(Object.keys(allGenres).sort());
};

const mapMoviesData = (data) =>
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
      genre: genres.join(', ') || undefined,
      releaseDate: release_date || undefined,
      id,
      overview,
      runtime,
      voteAverage: vote_average,
      tagline,
    })
  );

export { getGenres, mapMoviesData };
