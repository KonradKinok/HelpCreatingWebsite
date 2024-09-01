"use strict";var list=document.querySelector("ul#main-menu"),title=document.querySelector("title"),menuItem=[{name:"Menu",link:"../index.html"},{name:"01. Wprowadzenie do React",link:"../htmlReact/01-wprowadzenieDoReact.html"},{name:"02. Stylizacja",link:"../htmlReact/02-stylizacja.html"},{name:"03. Zdarzenia i stany",link:"../htmlReact/03-zdarzeniaStany.html"},{name:"04. Formularze",link:"../htmlReact/04-formularze.html"},{name:"05. Cykl życia",link:"../htmlReact/05-cyklZyciowy.html"},{name:"06. Zapytania HTTP",link:"../htmlReact/06-zapytaniaHttp.html"},{name:"07. React hooks",link:"../htmlReact/07-reactHooks.html"},{name:"08. Kontekst i referencje",link:"../htmlReact/08-kontekstReferencje.html"},{name:"09. Nawigacja",link:"../htmlReact/09-nawigacja.html"},{name:"10. Nawigacja2",link:"../htmlReact/10-nawigacja2.html"},{name:"11. Podstawy Redux",link:"../htmlReact/11-podstawyRedux.html"},{name:"12. Redux Toolkit",link:"../htmlReact/12-reduxToolkit.html"},{name:"13. Asynchroniczny Redux",link:"../htmlReact/13-asynchronicznyRedux.html"},{name:"14. Optymalizacja selektorów",link:"../htmlReact/14-optymalizacjaSelektorow.html"},{name:"15. Użytkownicy",link:"../htmlReact/15-uzytkownicy.html"},{name:"16. Portale",link:"../htmlReact/16-portale.html"}];menuItem.forEach((function(e){var t=document.createElement("li"),n=document.createElement("a");if(n.href=e.link,n.textContent=e.name,title.textContent===e.name.slice(4)){n.classList.add("current-page");var a=document.querySelector("div#footer-title");a&&(a.textContent=e.name)}t.appendChild(n),list&&list.appendChild(t)}));var thisPageMenu=document.querySelector("ul#this-page-menu"),sections=document.querySelectorAll("section");sections.forEach((function(e){console.log("Section",e.id),e.querySelectorAll("article").forEach((function(e){console.log("Article",e.firstElementChild.textContent);var t=document.createElement("li"),n=document.createElement("a");n.href="#".concat(e.id),n.textContent="".concat(e.firstElementChild.textContent),n.classList.add("link"),t.appendChild(n),thisPageMenu&&thisPageMenu.appendChild(t)}))}));var menuLinks=document.querySelectorAll(".this-page-menu a");menuLinks.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href").substring(1),n=document.getElementById(t);if(console.log("Target element:",n),n){var a=n.offsetTop-20;window.scrollTo({top:a,behavior:"smooth"})}}))}));var footerLogo=document.querySelector("div.footer-logo"),animationIcon=document.querySelector("div#footerAnimationIcon"),egzample=document.querySelector("div.footer-date");function beginAnimation(){animationIcon.classList.remove("footer-hidden"),animationIcon.classList.add("footer-animation"),egzample.style.color="#f16c6c"}function endAnimation(){animationIcon.classList.add("footer-hidden"),animationIcon.classList.remove("footer-animation")}footerLogo.addEventListener("mouseover",beginAnimation,!1),footerLogo.addEventListener("mouseout",endAnimation,!1);
//# sourceMappingURL=01-wprowadzenieDoReact.22ae8313.js.map