export const fetcher = (...args) => fetch(...args).then((res) => res.json())
export const apiKey = 'c0c36b6248307167e7611b2961acf74f'
export const tmdbEnpoint = 'https://api.themoviedb.org/3/'
export const tmdbApi = {
  getMovie: (type, page = 1) =>
    `${tmdbEnpoint}movie/${type}?api_key=${apiKey}&page=${page}`,
  getMoviePerson: (person) =>
    `${tmdbEnpoint}${person}/popular?api_key=${apiKey}`,
  getMovieSearch: (query, page = 1) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
  getMovieDetail: (movieId) =>
    `${tmdbEnpoint}movie/${movieId}?api_key=${apiKey}`,
  getMovieList: (movieId, type) =>
    `${tmdbEnpoint}movie/${movieId}/${type}?api_key=${apiKey}`,
  getMovieVideo: (movieId) =>
    `${tmdbEnpoint}movie/${movieId}/videos?api_key=${apiKey}`
}
