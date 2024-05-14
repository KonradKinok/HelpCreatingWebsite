'use strict';
// import './sass/main.scss';

//Import
import axios from 'axios';
import * as mainMethods from './23a.mjs';
// -------------KonradKonik
//ApiKey
const apiKey = '6bb894494c1a707618648b9164f393c2';
const AXIOS_AUTHORIZATION =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI4OTQ0OTRjMWE3MDc2MTg2NDhiOTE2NGYzOTNjMiIsInN1YiI6IjVlZDdiZmY3ZTRiNTc2MDAyMDM3NjYzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kRGs0WRoomKwYXT7Mt8PNU2Zk6kAVasud5CyVVdf2mA';
//Axios header - api key
axios.defaults.headers.common['Authorization'] = AXIOS_AUTHORIZATION;
let pageNumber = 1;

//DOM
const homeButton = document.querySelector('span#logo');
const gallery = document.querySelector('ul#cards-list');

//Listeners
homeButton.addEventListener('click', ev => {
  ev.preventDefault();
  pageNumber = 1;
  getMostPopularMovies(pageNumber);
});

//Functions
/**
 *getMostPopularMoviesTmdbApi
 ** Pobiera dane o najpopularniejszych filmach z API TMDb.
 * @param {number} currentPage Numer bieżącej strony do pobrania.
 * @returns {Promise<any>} Dane o najpopularniejszych filmach.
 */
async function getMostPopularMoviesTmdbApi(currentPage) {
  const searchParams = new URLSearchParams({
    language: 'en-US',
    page: currentPage,
  });
  const url = `https://api.themoviedb.org/3/trending/movie/day?${searchParams}`;
  const response = await axios.get(url);
  return response.data;
}

/**
 * getMostPopularMovies
 ** Pobiera dane o najpopularniejszych filmach z określonej strony i renderuje je na stronie.
 * @param {number} pageNumber - Numer strony do pobrania danych o najpopularniejszych filmach.
 * @returns {void}
 */
function getMostPopularMovies(pageNumber) {
  getMostPopularMoviesTmdbApi(pageNumber)
    .then(dataMovies => {
      renderMovies(dataMovies);
    })
    .catch(error => {
      console.error(error);
    });
}

/**
 *renderMovies
 ** Renderuje filmy na stronie internetowej na podstawie danych o filmach.
 * @param {object} dataMovies - Obiekt zawierający dane o filmach.
 * @param {number} dataMovies.total_pages - Całkowita liczba stron filmów.
 * @param {Array} dataMovies.results - Tablica obiektów zawierających dane o pojedynczych filmach.
 * @param {number} dataMovies.results[].id - Identyfikator filmu.
 * @param {string} dataMovies.results[].title - Tytuł filmu.
 * @param {string} dataMovies.results[].poster_path - Ścieżka do pliku z obrazem plakatu filmowego.
 * @param {string} dataMovies.results[].release_date - Data premiery filmu.
 * @param {Array} dataMovies.results[].genre_ids - Tablica identyfikatorów gatunków filmowych.
 * @returns {void}
 */
function renderMovies(dataMovies) {
  gallery.innerHTML = null;
  const totalPages = dataMovies.total_pages;

  const filmsList = dataMovies.results
    .map(({ id, title, poster_path, release_date, genre_ids }) => {
      //Img
      const urlSizePoster = getUrlSizePoster(poster_path);
      const urlW92 = urlSizePoster.find(obj => obj.name === 'w92');
      const urlW154 = urlSizePoster.find(obj => obj.name === 'w154');
      const urlW185 = urlSizePoster.find(obj => obj.name === 'w185');
      const urlW342 = urlSizePoster.find(obj => obj.name === 'w342');
      const urlW500 = urlSizePoster.find(obj => obj.name === 'w500');
      const urlW780 = urlSizePoster.find(obj => obj.name === 'w780');
      const urlOriginal = urlSizePoster.find(obj => obj.name === 'original');

      const genres = getGenres(genre_ids);
      const year = release_date.split('-')[0];

      return `<li>
            <div class="card" data-id="${id}">
              <div >
                <img class="card-img"
                  alt="${title}"
                  src="${urlW154.url}"
                  srcset="
                    ${urlW185.url} 185w,
                    ${urlW342.url} 342w,
                    ${urlW500.url} 500w,
                    ${urlW780.url} 780w
                     ${urlOriginal.url} 2000w
                  "
                  sizes="(min-width: 1157px) 780px, (min-width: 768px) 500px, (max-width: 767px) 342px, 100vw"
                />
              </div>
              <div class="card-text">
                <p class="card-text-title">${title}</p>
                <p class="card-text-genre">${genres} | ${year}</p>
              </div>
            </div>
          </li>`;
    })
    .join('');

  let kontrolkaDoPaginacji = 0; //nazwaKontrolkiDoPaginacji
  kontrolkaDoPaginacji = totalPages;
  gallery.insertAdjacentHTML('beforeend', filmsList);
}

/**
 *getUrlSizePoster
 ** Generuje listę obiektów zawierających URL różnych rozmiarów obrazka.
 * @param {string} posterPath Endpoint ścieżki do pliku obrazka
 * @returns {Object[]} Tablica obiektów zawierających nazwę i URL różnych rozmiarów obrazka.
 */
function getUrlSizePoster(posterPath) {
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

/**
 *getGenres
 ** Zwraca nazwy gatunków filmowych na podstawie ich identyfikatorów.
 * @param {number[]} genre_ids - Tablica identyfikatorów gatunków filmowych.
 * @returns {string} Nazwy gatunków filmowych, oddzielone przecinkami.
 */
function getGenres(genre_ids) {
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
// -------------KonradKonik End

// MartaMajnusz - wyszukiwarka (F10)
// import {
//   searchMovies,
//   fetchGenresList,
//   createCards,
// } from './scripts/search.js';

// const search = document.querySelector('.search-form');
// const cardsList = document.querySelector('ul#cards-list');
// let lastSearchTerm;

// search.addEventListener('submit', async ev => {
//   ev.preventDefault();
//   cardsList.innerHTML = ` `;
//   const warning = document.querySelector(`p.warning`);
//   const searchTerm = ev.currentTarget.elements.searchQuery.value;
//   lastSearchTerm = searchTerm;

//   try {
//     const data = await searchMovies(lastSearchTerm);
//     const dataMovies = data.results;
//     const genresList = await fetchGenresList();

//     if (searchTerm === lastSearchTerm) {
//       if (data.results.length === 0) {
//         console.log(`Nie znaleziono filmów`);
//         warning.innerText = `Search result not successful. Enter the correct movie name and`;
//       } else {
//         createCards(dataMovies, genresList);
//       }
//     }
//   } catch (error) {
//     console.error('Wystąpił błąd:', error);
//   }
// });

// Marta - koniec
