'use strict';
const list = document.querySelector('ul#main-menu');

const title = document.querySelector('title');

const menuItem = [
  {
    name: 'Menu',
    link: '../index.html',
  },
  {
    name: '01. Podstawy Node.js',
    link: '../htmlNode/01-podstawyNode.js.html',
  },
  {
    name: '02. Tworzenie aplikacji konsolowych',
    link: '../htmlNode/02-tworzenieAplikacjiKonsolowych.html',
  },
  {
    name: '03. Framework Express',
    link: '../htmlNode/03-frameworkExpress.html',
  },
  {
    name: '04. Rest API',
    link: '../htmlNode/04-restApi.html',
  },
  {
    name: '05. Baza danych Mongo DB',
    link: '../htmlNode/05-bazaDanychMongoDb.html',
  },
  {
    name: '06. ODM Mongoose',
    link: '../htmlNode/06-odmMongoose.html',
  },
  {
    name: '07. Uwierzytelnienie i autoryzacja',
    link: '../htmlNode/07-uwierzytelnianieAutoryzacja.html',
  },
  {
    name: '08. Praca z plikami',
    link: '../htmlNode/08-pracaZPlikami.html',
  },
  {
    name: '09. Testowanie aplikacji',
    link: '../htmlNode/09-testowanieAplikacji.html',
  },
  {
    name: '10. Praca z e-mail i Docker',
    link: '../htmlNode/10-pracaEmailDocker.html',
  },
  {
    name: '11. Websockets',
    link: '../htmlNode/11-websockets.html',
  },
  {
    name: '12. Materiały dodatkowe',
    link: '../htmlNode/12-materialyDodatkowe.html',
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
    console.log('Article', article.firstElementChild.textContent);
    const listItem = document.createElement('li');
    const linkItem = document.createElement('a');
    linkItem.href = `#${article.id}`;
    linkItem.textContent = `${article.firstElementChild.textContent}`;
    linkItem.classList.add('link');
    listItem.appendChild(linkItem);
    if (thisPageMenu) {
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
