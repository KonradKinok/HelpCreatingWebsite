var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;function r(e,n,t="example-theory-pre"){const o=document.querySelector(e),r=document.querySelector(n),a=document.createElement("pre");a.classList.add(t);const i=r.innerHTML.split("  ").join("");a.textContent=`HTML: ${i}`,o.prepend(a)}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var a=o("iQIUW");const i={timeout:4e3};r("div#example-theory-s3a5","div#example-practice-s3a5");const c=document.querySelector("button#btn-s3a5"),s=document.querySelector("ul#user-list-s3a5");c.addEventListener("click",(()=>{fetch("https://jsonplaceholder.typicode.com/users").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>function(e){const n=e.map((e=>`<li>\n          <p><b>Name</b>: ${e.name}</p>\n          <p><b>Email</b>: ${e.email}</p>\n          <p><b>Company</b>: ${e.company.name}</p>\n        </li>`)).join("");s.insertAdjacentHTML("beforeend",n)}(e))).catch((e=>a.Notify.failure(`${e}`,{...i})))})),r("div#example-theory-s3a7","div#example-practice-s3a7");const l=document.querySelector("button#btn-s3a7"),p=document.querySelector("ul#user-list-s3a7");function u(e){a.Notify.failure(`${e}`,i),console.log(e)}l.addEventListener("click",(()=>{fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>function(e){const n=e.map((e=>`\n          <li>\n            <p><b>Name</b>: ${e.name}</p>\n            <p><b>Email</b>: ${e.email}</p>\n            <p><b>Company</b>: ${e.company.name}</p>\n          </li>\n      `)).join("");p.insertAdjacentHTML("beforeend",n)}(e))).catch((e=>u(e)))})),r("div#example-theory-s3a8","div#example-practice-s3a8");const d=document.querySelector("button#btn-s3a8"),m=document.querySelector("ul#user-list-s3a8");function u(e){a.Notify.failure(`${e}`,i),console.log(e)}d.addEventListener("click",(()=>{fetch(f).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>function(e){const n=e.map(((e,n)=>`\n          <li>\n            <p><b>${n+1} Name</b>: ${e.name}</p>\n            <p><b>Email</b>: ${e.email}</p>\n            <p><b>Company</b>: ${e.company.name}</p>\n          </li>\n      `)).join("");m.insertAdjacentHTML("beforeend",n)}(e))).catch((e=>u(e)))}));const f=`https://jsonplaceholder.typicode.com/users?${new URLSearchParams({_limit:5,_sort:"name"})}`;
//# sourceMappingURL=19-zapytaniaHttp.b85dd89d.js.map
