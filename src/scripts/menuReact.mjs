'use strict';
const list = document.querySelector('ul#main-menu');
const title = document.querySelector('title');

const menuItem = [
  {
    name: 'Menu',
    link: '../index.html',
  },
  {
    name: '01. Wprowadzenie do React',
    link: '../htmlReact/01-wprowadzenieDoReact.html',
  },
  {
    name: '02. Stylizacja',
    link: '../htmlReact/02-stylizacja.html',
  },
  {
    name: '03. Zdarzenia i stany',
    link: '../htmlReact/03-zdarzeniaStany.html',
  },
  {
    name: '04. Formularze',
    link: '../htmlReact/04-formularze.html',
  },
];

menuItem.forEach(element => {
  const listItem = document.createElement('li');
  const linkItem = document.createElement('a');

  linkItem.href = element.link;
  linkItem.textContent = element.name;
  // linkItem.classList.add('link');
  if (title.textContent === element.name.slice(4)) {
    linkItem.classList.add('current-page');
    const footerTitle = document.querySelector('div#footer-title');
    if (footerTitle) {
      footerTitle.textContent = element.name;
    }
  }

  listItem.appendChild(linkItem);
  if (list) {
    list.appendChild(listItem);
  }
});
