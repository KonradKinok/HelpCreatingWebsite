'use strict';
//Import
import * as mainMethods from './functions.mjs';
import * as tmdb from './23a.mjs';
import axios from 'axios';
//ApiKey
const apiKey = '6bb894494c1a707618648b9164f393c2';
const AXIOS_AUTHORIZATION =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI4OTQ0OTRjMWE3MDc2MTg2NDhiOTE2NGYzOTNjMiIsInN1YiI6IjVlZDdiZmY3ZTRiNTc2MDAyMDM3NjYzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kRGs0WRoomKwYXT7Mt8PNU2Zk6kAVasud5CyVVdf2mA';
//Axios header - api key
axios.defaults.headers.common['Authorization'] = AXIOS_AUTHORIZATION;

//DOM
const searchButton = document.querySelector('button#search-button');
const gallery = document.querySelector('ul#cards-list');
const inputNumberPage = document.querySelector('input#input-page');
const inputTotalPage = document.querySelector('label#label-pages');
inputNumberPage.value = 1;
inputNumberPage.addEventListener('change', event => {
  let pageNumber = inputNumberPage.value;
  getMostPopularMovies(pageNumber);
});
searchButton.addEventListener('click', ev => {
  inputNumberPage.value = 1;
  pageNumber = inputNumberPage.value;
  getMostPopularMovies(pageNumber);
});

//Functions
function getMostPopularMovies(pageNumber) {
  tmdb
    .getMostPopularMoviesTmdbApi(pageNumber)
    .then(dataMovies => {
      getTmdbConfiguration();
      renderMovies(dataMovies);
    })
    .catch(error => {
      //   Notify.failure(`${error}`, optionsNotify);
      console.log(error);
    });
}
function getTmdbConfiguration() {
  tmdb
    .getTmdbConfiguration()
    .then(dataMovies => {
      // console.log(dataMovies);
    })
    .catch(error => {
      //   Notify.failure(`${error}`, optionsNotify);
      console.log(error);
    });
}
const temp = tmdb.getUrlSizePoster('poster_path');
// temp.
// function renderMovies(dataMovies) {
//   gallery.innerHTML = null;
//   const filmsList = dataMovies.results
//     .map(({ id, original_title, poster_path, release_date, genre_ids }) => {
//       const urlSizePoster = tmdb.getUrlSizePoster(poster_path);
//       const url = urlSizePoster.find(obj => obj.name === 'w500');
//       const year = release_date.split('-')[0];
//       const genres = tmdb.getGenres(genre_ids);

//       const listItem = document.createElement('li');
//       const divCard = document.createElement('div');
//       divCard.classList.add('card');
//       divCard.setAttribute('data-id', id);

//       const divCardImg = document.createElement('div');
//       divCardImg.classList.add('card-img');

//       divCardImg.style.backgroundImage = `url("${url.url}")`;

//       const divCardText = document.createElement('div');
//       divCardText.classList.add('card-text');

//       const pCardTextTitle = document.createElement('p');
//       pCardTextTitle.classList.add('card-text-title');
//       pCardTextTitle.textContent = original_title;

//       const pCardTextGenre = document.createElement('p');
//       pCardTextGenre.classList.add('card-text-genre');
//       pCardTextGenre.textContent = genres + ' | ' + year;

//       divCardText.appendChild(pCardTextTitle);
//       divCardText.appendChild(pCardTextGenre);

//       divCard.appendChild(divCardImg);
//       divCard.appendChild(divCardText);

//       listItem.appendChild(divCard);
//       gallery.appendChild(listItem);
//     })
//     .join('');

//   gallery.insertAdjacentHTML('beforeend', filmsList);
// }

function renderMovies(dataMovies) {
  gallery.innerHTML = null;
  const totalPages = dataMovies.total_pages;

  const filmsList = dataMovies.results
    .map(({ id, title, poster_path, release_date, genre_ids }) => {
      //Img
      const urlSizePoster = tmdb.getUrlSizePoster(poster_path);
      const urlW92 = urlSizePoster.find(obj => obj.name === 'w92');
      const urlW154 = urlSizePoster.find(obj => obj.name === 'w154');
      const urlW185 = urlSizePoster.find(obj => obj.name === 'w185');
      const urlW342 = urlSizePoster.find(obj => obj.name === 'w342');
      const urlW500 = urlSizePoster.find(obj => obj.name === 'w500');
      const urlW780 = urlSizePoster.find(obj => obj.name === 'w780');
      const urlOriginal = urlSizePoster.find(obj => obj.name === 'original');

      const genres = tmdb.getGenres(genre_ids);
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
  inputTotalPage.textContent = totalPages;
  gallery.insertAdjacentHTML('beforeend', filmsList);
}
