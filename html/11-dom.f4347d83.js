const e=document.querySelector("#menu");e.style.textTransform="uppercase",e.style.fontSize="24px",console.log(e);const t=document.querySelector(".menu");console.log(t);const o=document.querySelectorAll("li");console.log(o);const n=document.querySelectorAll(".menu-item");console.log(n);const c=document.querySelector(".menu-item");c.style.color="tomato",console.log(c);const s=document.querySelector(".image");console.log(s.src),console.log(s.alt),s.src="https://picsum.photos/id/13/640/480",s.alt="River bank";const i=document.querySelector(".article-text");console.log(i.textContent);document.querySelector(".article-title").textContent="Welcome to Bahamas!";const l=document.querySelector(".section4-link");console.log(l.classList);const a=l.classList.contains("section4-is-active");console.log(`hasActiveClass - ${a}`),l.classList.add("special"),console.log(l.classList),l.classList.remove("section4-is-active"),console.log(l.classList),l.classList.toggle("section4-is-active"),console.log(l.classList),l.classList.replace("special","regular"),console.log(l.classList);const r=document.querySelector(".section4-image");console.log(r.attributes),console.log(r.hasAttribute("src")),console.log(r.getAttribute("alt")),r.setAttribute("alt","Amazing nature"),console.log(r.getAttribute("alt"));const u=document.querySelector('.editor button[data-action="save"]'),m=document.querySelector('.editor button[data-action="close"]');console.log(u.dataset.action),console.log(m.dataset.action);const d=document.querySelector(".section5-usernames"),g=document.createElement("li");g.textContent="Poly",d.append(g);const p=document.createElement("li");p.textContent="Ajax",d.prepend(p);const S=document.createElement("h2");S.textContent="USERNAMES",d.before(S);const q=document.createElement("p");q.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!",d.after(q);document.querySelector(".section5-text").remove();const y=document.querySelector(".section6-article");console.log(y.innerHTML);const L=document.querySelector(".section6-article .section6-title");console.log(L.innerHTML);const b=document.querySelector(".section6-article .section6-text");console.log(b.innerHTML);const x=document.querySelector(".section6-article .section6-link");console.log(x.innerHTML);document.querySelector(".section6Zmiana-article .section6Zmiana-title").innerHTML='New and <span class="section6Zmiana-accent">improved</span> title';const v=document.querySelector(".section6list"),h=["HTML","CSS","JavaScript","React","Node"].map((e=>`<li class="list-item">${e}</li>`)).join("");console.log(h),v.innerHTML=h;document.querySelector(".section6article4-article").innerHTML+='<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>\n   <a class="link" href="#">Read more...</a>';const A=document.querySelector(".section7article1-list"),T=["React","TypeScript","Node.js"].map((e=>`<li class="section7article1-list-item new">${e}</li>`)).join("");A.insertAdjacentHTML("beforeend",T),A.insertAdjacentHTML("beforebegin","<h2>Popular technologies</h2>");
//# sourceMappingURL=11-dom.f4347d83.js.map
