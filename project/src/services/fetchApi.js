import axios from 'axios';

const API_KEY = '465ec2c2104ee0fc99609fab2f518357';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrendingFilms() {
  const resp = await axios({
    method: 'GET',
    url: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  });
  return resp;
}
function getFilmById(id) {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
  });
}
function getFilmsByQuery(query) {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/search/movie?api_key=${API_KEY}&query=` + query,
  });
}
function getCastInfo(id) {
  return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
}
function getReviewsInfo(id) {
  return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
}

export {
  getTrendingFilms,
  getFilmById,
  getFilmsByQuery,
  getCastInfo,
  getReviewsInfo,
};
