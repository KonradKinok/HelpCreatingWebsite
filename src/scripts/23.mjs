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
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
//DOM
const searchButton = document.querySelector('button#search-button');
const gallery = document.querySelector('ul#cards-list');

searchButton.addEventListener('click', ev => {
  getMostPopularMovies();
});

//Functions
function getMostPopularMovies() {
  tmdb
    .getMostPopularMovies(1)
    .then(dataMovies => {
      console.log(dataMovies);
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
      console.log(dataMovies);
    })
    .catch(error => {
      //   Notify.failure(`${error}`, optionsNotify);
      console.log(error);
    });
}
function renderMovies(dataMovies) {
  gallery.innerHTML = null;
  const markup = dataMovies.results
    .map(({ id, original_title }) => {
      //   return `<li>
      //       <div class="card">
      //         <div class="card-img" data-id="${id}"></div>
      //         <div class="card-text">
      //           <p class="card-text-title">Ghostbusters</p>
      //           <p class="card-text-genre">Drama, Action | 2024</p>
      //         </div>
      //       </div>
      //     </li>;`;
      // return `  <div class="photo-card">
      //   <a class="link-img" href="${largeImageURL}">
      //     <img src="${webformatURL}" alt="${tags}" loading="lazy" />

      //   <div class="info">
      //     <div>
      //       <p class="info-item">
      //         <b>Likes</b>
      //       </p>
      //       <p class="info-item">${likes}</p>
      //     </div>
      //     <div>
      //       <p class="info-item">
      //         <b>Views</b>
      //       </p>
      //       <p class="info-item">${views}</p>
      //     </div>
      //     <div>
      //       <p class="info-item">
      //         <b>Comments</b>
      //       </p>
      //       <p class="info-item">${comments}</p>
      //     </div>
      //     <div>
      //       <p class="info-item">
      //         <b>Downloads</b>
      //       </p>
      //       <p class="info-item">${downloads}</p>
      //     </div>
      //   </div>
      //   </a>
      // </div>`;
      const listItem = document.createElement('li');
      const divCard = document.createElement('div');
      divCard.classList.add('card');

      const divCardImg = document.createElement('div');
      divCardImg.classList.add('card-img');

      const divCardText = document.createElement('div');
      divCardText.classList.add('card-text');

      const pCardTextTitle = document.createElement('p');
      pCardTextTitle.classList.add('card-text-title');
      pCardTextTitle.textContent = original_title;
      const pCardTextGenre = document.createElement('p');
      pCardTextGenre.classList.add('card-text-genre');

      divCardText.appendChild(pCardTextTitle);
      divCardText.appendChild(pCardTextGenre);

      divCard.appendChild(divCardImg);
      divCard.appendChild(divCardText);

      listItem.appendChild(divCard);
      gallery.appendChild(listItem);
      console.log(id);
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

function render() {
  const listItem = document.createElement('li');
  const divCard = document.createElement('div');
  divCard.classList.add('card');

  const divCardImg = document.createElement('div');
  divCardImg.classList.add('card-img');

  const divCardText = document.createElement('div');
  divCardText.classList.add('card-text');

  const pCardTextTitle = document.createElement('p');
  pCardTextTitle.classList.add('card-text-title');

  const pCardTextGenre = document.createElement('p');
  pCardTextGenre.classList.add('card-text-genre');

  divCardText.appendChild(pCardTextTitle);
  divCardText.appendChild(pCardTextGenre);

  divCard.appendChild(divCardImg);
  divCard.appendChild(divCardText);

  listItem.appendChild(divCard);
  gallery.appendChild(listItem);
}
