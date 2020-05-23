import axios from "axios";

export const movieAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  responseType: "json"
});

export const apiKey = '8b1fe55503ca49a93aa9d23e5695aab9';
