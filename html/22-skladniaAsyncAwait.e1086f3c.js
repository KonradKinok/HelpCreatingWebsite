var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const l={timeout:4e3};!function(e,t,o="example-theory-pre"){const n=document.querySelector(e),r=document.querySelector(t),l=document.createElement("pre");l.classList.add(o),l.innerText=`'HTML: ${r.innerHTML}`,n.prepend(l)}("div#example-theory-s1a3","div#example-practice-s1a3");const s=document.querySelector("form#form-s1a3");document.querySelector("ul#user-list-s1a3");s.addEventListener("submit",(e=>{e.preventDefault();const{elements:{input_id_s1a4:t,input_body_s1a4:o}}=e.currentTarget;console.log(t.value,o.value);const n=getOptionsToUrl_s1a4(t.value,o.value);fetch(`https://jsonplaceholder.typicode.com/posts/${t.value}`,n).then((e=>e.json())).then((e=>{console.log(e),renderPosts_s1a4(e)})).catch((e=>r.Notify.failure(`${e}`,l)))}));
//# sourceMappingURL=22-skladniaAsyncAwait.e1086f3c.js.map
