'use strict';
const list = document.querySelector('ul#main-menu');
const title = document.querySelector('title');

const menuItem = [
  {
    name: 'Menu',
    link: '../index.html',
  },
  {
    name: '01. Technologie internetowe',
    link: '../htmlReact/01-wprowadzenieDoReact.html',
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

//Footer
const footerLogo = document.querySelector('div.footer-logo');
const animationIcon = document.querySelector('div#footerAnimationIcon');
const egzample = document.querySelector('div.footer-date');
footerLogo.addEventListener('mouseover', beginAnimation, false);
footerLogo.addEventListener('mouseout', endAnimation, false);

function beginAnimation() {
  // animationIcon.classList.toggle('footer-hidden');
  animationIcon.classList.remove('footer-hidden');
  animationIcon.classList.add('footer-animation');
  egzample.style.color = '#f16c6c';
}

function endAnimation() {
  // animationIcon.classList.toggle('footer-hidden');
  animationIcon.classList.add('footer-hidden');
  animationIcon.classList.remove('footer-animation');
}
