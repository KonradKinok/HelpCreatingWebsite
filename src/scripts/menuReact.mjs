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
  {
    name: '05. Cykl życia',
    link: '../htmlReact/05-cyklZyciowy.html',
  },
  {
    name: '06. Zapytania HTTP',
    link: '../htmlReact/06-zapytaniaHttp.html',
  },
  {
    name: '07. React hooks',
    link: '../htmlReact/07-reactHooks.html',
  },
  {
    name: '08. Kontekst i referencje',
    link: '../htmlReact/08-kontekstReferencje.html',
  },
  {
    name: '09. Nawigacja',
    link: '../htmlReact/09-nawigacja.html',
  },
  {
    name: '10. Nawigacja2',
    link: '../htmlReact/10-nawigacja2.html',
  },
  {
    name: '11. Podstawy Redux',
    link: '../htmlReact/11-podstawyRedux.html',
  },
  {
    name: '12. Redux Toolkit',
    link: '../htmlReact/12-reduxToolkit.html',
  },
  {
    name: '13. Asynchroniczny Redux',
    link: '../htmlReact/13-asynchronicznyRedux.html',
  },
  {
    name: '14. Optymalizacja selektorów',
    link: '../htmlReact/14-optymalizacjaSelektorow.html',
  },
  {
    name: '15. Użytkownicy',
    link: '../htmlReact/15-uzytkownicy.html',
  },
  {
    name: '16. Portale',
    link: '../htmlReact/16-portale.html',
  },
  {
    name: '17. Tworzenie projektu',
    link: '../htmlReact/17-tworzenieProjektu.html',
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
