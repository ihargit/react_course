// might be needed to extract all present genres from the movies downloaded
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

export { getGenres };
