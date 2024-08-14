'use strict';
const list = document.querySelector('ul#main-menu');

const title = document.querySelector('title');

const menuItem = [
  {
    name: 'Menu',
    link: '../index.html',
  },
  {
    name: '01. Hints',
    link: '../htmlTypeScript/01-hints.html',
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

//thisPageMenu
const thisPageMenu = document.querySelector('ul#this-page-menu');
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  console.log('Section', section.id);
  const articles = section.querySelectorAll('article');
  articles.forEach(article => {
    console.log('Article', article.id, article.firstElementChild.textContent);
    const listItem = document.createElement('li');
    const linkItem = document.createElement('a');
    linkItem.href = `#${article.id}`;
    linkItem.textContent = `${article.firstElementChild.textContent}`;
    linkItem.classList.add('link');
    listItem.appendChild(linkItem);
    if (list) {
      thisPageMenu.appendChild(listItem);
    }
  });
});

const menuLinks = document.querySelectorAll('.this-page-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    console.log('Target element:', targetElement);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 20; // 20px niżej

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
//Footer
const footerLogo = document.querySelector('div.footer-logo');
// const animationIcon = document.querySelector('div#footerAnimationIcon');
const egzample = document.querySelector('div.footer-date');
// footerLogo.addEventListener('mouseover', beginAnimation, false);
// footerLogo.addEventListener('mouseout', endAnimation, false);

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
