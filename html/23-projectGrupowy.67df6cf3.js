var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},a=n.parcelRequired7c6;null==a&&((a=function(n){if(n in e)return e[n].exports;if(n in i){var a=i[n];delete i[n];var t={id:n,exports:{}};return e[n]=t,a.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){i[n]=e},n.parcelRequired7c6=a);var t=a("2shzp");(t=a("2shzp")).default.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI4OTQ0OTRjMWE3MDc2MTg2NDhiOTE2NGYzOTNjMiIsInN1YiI6IjVlZDdiZmY3ZTRiNTc2MDAyMDM3NjYzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kRGs0WRoomKwYXT7Mt8PNU2Zk6kAVasud5CyVVdf2mA";t.default.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI4OTQ0OTRjMWE3MDc2MTg2NDhiOTE2NGYzOTNjMiIsInN1YiI6IjVlZDdiZmY3ZTRiNTc2MDAyMDM3NjYzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kRGs0WRoomKwYXT7Mt8PNU2Zk6kAVasud5CyVVdf2mA";const r=document.querySelector("span#logo"),s=document.querySelector("ul#cards-list"),o=document.querySelector("ul#control-pagination-list");r.addEventListener("click",(n=>{n.preventDefault(),d=1,async function(n){const e=`https://api.themoviedb.org/3/trending/movie/day?${new URLSearchParams({language:"en-US",page:n})}`;return(await t.default.get(e)).data}(d).then((n=>{!function(n){s.innerHTML=null,n.total_pages,n.page;const e=n.results.map((({id:n,title:e,poster_path:i,release_date:a,genre_ids:t})=>{const r=function(n){const e="https://image.tmdb.org/t/p/";return["w92","w154","w185","w342","w500","w780","original"].map((i=>({name:i,url:e+i+n})))}(i),s=(r.find((n=>"w92"===n.name)),r.find((n=>"w154"===n.name))),o=r.find((n=>"w185"===n.name)),d=r.find((n=>"w342"===n.name)),l=r.find((n=>"w500"===n.name)),c=r.find((n=>"w780"===n.name)),m=r.find((n=>"original"===n.name)),u=function(n){const e=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}].filter((e=>n.includes(e.id))).map((n=>n.name));return e.join(", ")}(t),p=a.split("-")[0];return`<li>\n            <div class="card" data-id="${n}">\n              <div >\n                <img class="card-img"\n                  alt="${e}"\n                  src="${s.url}"\n                  srcset="\n                    ${o.url} 185w,\n                    ${d.url} 342w,\n                    ${l.url} 500w,\n                    ${c.url} 780w\n                     ${m.url} 2000w\n                  "\n                  sizes="(min-width: 1157px) 780px, (min-width: 768px) 500px, (max-width: 767px) 342px, 100vw"\n                />\n              </div>\n              <div class="card-text">\n                <p class="card-text-title">${e}</p>\n                <p class="card-text-genre">${u} | ${p}</p>\n              </div>\n            </div>\n          </li>`})).join("");s.insertAdjacentHTML("beforeend",e)}(n)})).catch((n=>{console.error(n)}))}));let d=1;o.innerHTML=function(n,e){let i,a,t="",r=e-2,s=e+2;e>1&&(t+=`<li class="btn prev" onclick="createPagination(${n}, ${e-1})"><svg width="16" height="16">\n                  <use href="../images/icons.svg#icon-arrow-right"></use>\n                </svg></li>`);e>3&&(t+=`<li class="first numb" onclick="createPagination(${n}, 1)"><span>1</span></li>`,e>4&&(t+='<li class="dots"><span>...</span></li>'));e==n&&(r-=1);1==e&&(s+=1);for(var d=r;d<=s;d++)d>n||d<=0||(e==d?(a="active",i="id = 'pagination-current-page'"):(a="",i=""),t+=`<li class="numb ${a}" ${i} onclick="createPagination(${n}, ${d})"><span>${d}</span></li>`);e<n-2&&(e<n-3&&(t+='<li class="dots"><span>...</span></li>'),t+=`<li class="last numb" onclick="createPagination(${n}, ${n})"><span>${n}</span></li>`);e<n&&(t+=`<li class="btn next" onclick="createPagination(${n}, ${e+1})"><svg width="16" height="16">\n          <use href="./images/icons.svg#icon-arrow-right"></use>\n        </svg></li>`);return o.innerHTML=t,t}(100,d);
//# sourceMappingURL=23-projectGrupowy.67df6cf3.js.map