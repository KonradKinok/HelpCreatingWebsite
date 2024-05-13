'use strict';
//Import
import axios from 'axios';
//ApiKey
const apiKey = '6bb894494c1a707618648b9164f393c2';
const AXIOS_AUTHORIZATION =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI4OTQ0OTRjMWE3MDc2MTg2NDhiOTE2NGYzOTNjMiIsInN1YiI6IjVlZDdiZmY3ZTRiNTc2MDAyMDM3NjYzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kRGs0WRoomKwYXT7Mt8PNU2Zk6kAVasud5CyVVdf2mA';
//Axios header - api key
axios.defaults.headers.common['Authorization'] = AXIOS_AUTHORIZATION;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export async function getMostPopularMovies(currentPage) {
  const searchParams = new URLSearchParams({
    language: 'en-US',
    page: currentPage,
  });
  const url = `https://api.themoviedb.org/3/trending/movie/day?${searchParams}`;
  const response = await axios.get(url);
  console.log(url);
  return response.data;
}

export async function getTmdbConfiguration() {
  const url = `https://api.themoviedb.org/3/configuration`;
  const response = await axios.get(url);
  return response.data;
}

// async function getTmdbGenres() {
//   const searchParams = new URLSearchParams({
//     language: 'en-US',
//   });
//   const url = `https://api.themoviedb.org/3/genre/movie/list?${searchParams}`;
//   const response = await axios.get(url);
//   return response.data;
// }

// export function getGenres() {
//   try {
//     const TAB_GENRIES = getTmdbGenres();
//     // console.log(genres);
//     return TAB_GENRIES;
//   } catch (error) {
//     // Notify.failure(`${error}`, optionsNotify);
//     console.log(error);
//     throw error; // Rzucamy błąd, aby móc go obsłużyć dalej, jeśli to konieczne
//   }
// }
export function getUrlSizePoster(posterPath) {
  const url = 'https://image.tmdb.org/t/p/';
  const poster_sizes = [
    'w92',
    'w154',
    'w185',
    'w342',
    'w500',
    'w780',
    'original',
  ];
  const postersUrlsObject = poster_sizes.map(size => {
    return {
      name: size,
      url: url + size + posterPath,
    };
  });
  return postersUrlsObject;
}

export function getGenres(genre_ids) {
  const genres = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];
  const matchingGenres = genres
    .filter(genre => genre_ids.includes(genre.id))
    .map(genre => genre.name);

  const genreNames = matchingGenres.join(', ');
  return genreNames;
}
