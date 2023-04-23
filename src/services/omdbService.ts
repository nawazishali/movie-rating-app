import axios from 'axios'

const BASE_URL = 'https://www.omdbapi.com/'
const OMBP_API_KEY = import.meta.env.VITE_OMDB_KEY

export const omdbService = axios.create({
  baseURL: `${BASE_URL}?apikey=${OMBP_API_KEY}`,
});