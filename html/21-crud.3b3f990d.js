var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;function s(e,t,o="example-theory-pre"){const n=document.querySelector(e),s=document.querySelector(t),r=document.createElement("pre");r.classList.add(o);const i=s.innerHTML.replace(/ {2,}/g,"\n\r");r.textContent=`'HTML: ${i}`,n.prepend(r)}null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i={timeout:4e3},l=document.querySelector("button#btn-s1a2"),c=document.querySelector("ul#user-list-s1a2");l.addEventListener("click",(e=>{fetch("https://jsonplaceholder.typicode.com/posts").then((e=>e.json())).then((e=>{!function(e){c.innerHTML=null;const t=e.map((({id:e,title:t,body:o,userId:n},s)=>`<li >\n          <h2 class="post-title">${s+1}. ${t.slice(0,30)}</h2>\n          <p><b>Post id</b>: ${e}</p>\n          <p><b>Author id</b>: ${n}</p>\n          <p>${o}</p>\n        </li>`)).join("");c.innerHTML=t}(e)})).catch((e=>r.Notify.failure(`${e}`,i)))})),s("div#example-theory-s1a3","div#example-practice-s1a3");const a=document.querySelector("form#form-s1a3"),u=document.querySelector("ul#user-list-s1a3");a.addEventListener("submit",(e=>{e.preventDefault();const{elements:{input_author_s1a3:t,input_body_s1a3:o}}=e.currentTarget;console.log(t.value,o.value);const n=function(e,t){const o={author:e,body:t};return{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}}}(t.value,o.value);fetch("https://jsonplaceholder.typicode.com/posts",n).then((e=>e.json())).then((e=>{console.log(e),function(e){const{author:t,body:o,id:n}=e,s=`<li >\n          <p><b>Method POST:</b></p>\n          <p><b>Post author</b>: ${t}</p>\n          <p><b>Post body</b>: ${o}</p>\n          <p><b>Author id</b>: ${n}</p>\n        </li>`;u.innerHTML=s}(e)})).catch((e=>r.Notify.failure(`${e}`,i)))})),s("div#example-theory-s1a4","div#example-practice-s1a4");const p=document.querySelector("form#form-s1a4"),d=document.querySelector("ul#user-list-s1a4");p.addEventListener("submit",(e=>{e.preventDefault();const{elements:{input_id_s1a4:t,input_body_s1a4:o}}=e.currentTarget;console.log(t.value,o.value);const n=function(e,t){const o={id:e,body:t};return{method:"PATCH",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}}}(t.value,o.value);fetch(`https://jsonplaceholder.typicode.com/posts/${t.value}`,n).then((e=>e.json())).then((e=>{console.log(e),function(e){const{id:t,title:o,body:n}=e,s=`<li >\n          <p><b>Method POST:</b></p>\n          <p><b>Post id</b>: ${t}</p>\n          <p><b>Post title</b>: ${o}</p>\n          <p><b>Post body</b>: ${n}</p>\n        </li>`;d.innerHTML=s}(e)})).catch((e=>r.Notify.failure(`${e}`,i)))})),s("div#example-theory-s1a5","div#example-practice-s1a5");const b=document.querySelector("form#form-s1a5"),h=document.querySelector("ul#user-list-s1a5");b.addEventListener("submit",(e=>{e.preventDefault();const{elements:{input_id_s1a5:t}}=e.currentTarget;console.log(t.value);const o=function(e){const t={id:e};return{method:"DELETE",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}}(t.value);fetch(`https://jsonplaceholder.typicode.com/posts/${t.value}`,o).then((e=>e.json())).then((e=>{console.log(e),function(e){const{id:t,title:o,body:n}=e,s=`<li >\n          <p><b>Method POST:</b></p>\n          <p><b>Post id</b>: ${t}</p>\n          <p><b>Post title</b>: ${o}</p>\n          <p><b>Post body</b>: ${n}</p>\n        </li>`;h.innerHTML=s}(e)})).catch((e=>r.Notify.failure(`${e}`,i)))}));
//# sourceMappingURL=21-crud.3b3f990d.js.map
