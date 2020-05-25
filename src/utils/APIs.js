import axios from "axios";

export const movieAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  responseType: "json"
});

export const serieAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/",
  responseType: "json"
});

export const searchMovieAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
  responseType: "json"
});

export const searchMultiAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
  responseType: "json"
});

export const apiKey = '8b1fe55503ca49a93aa9d23e5695aab9';
