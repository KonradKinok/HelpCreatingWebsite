function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),s.register("oGzBH",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(e!==t)throw new TypeError("Private static access of wrong provenance")}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var r=l.default(e,t,"get");return o.default(e,r)};var l=c(s("fExtF")),o=c(s("iaRLo"));function c(e){return e&&e.__esModule?e:{default:e}}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,r){d.default(e,t),t.set(e,r)};var u,d=(u=s("7K24o"))&&u.__esModule?u:{default:u};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,r){var i=p.default(e,t,"set");return m.default(e,i,r),r};var p=v(s("fExtF")),m=v(s("3LGG3"));function v(e){return e&&e.__esModule?e:{default:e}}var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,r){return b.default(e,t),b.default(r,"get"),g.default(e,r)};var b=_(s("oGzBH")),g=_(s("iaRLo"));function _(e){return e&&e.__esModule?e:{default:e}}var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};const E={name:"Stacey",surname:"Moore",age:54,heritage:"Irish"},P=Object.create(E);P.name="Jason",P.age=27;Object.create({name:"Paul",age:83,surname:"Dawson",heritage:"Irish"});E.name="Stacey",E.surname="Moore",E.age=54;new class{getPrice(){return this.price}changePrice(e){this.price=e}constructor({brand:e,model:t,price:r}){this.brand=e,this.model=t,this.price=r}}({brand:"Audi",model:"Q3",price:36e3});var y=new WeakMap;class x{get price(){return e(a)(this,y)}set price(t){t<=x.MAX_PRICE&&e(f)(this,y,t)}constructor({price:t}){e(n)(this,y,{writable:!0,value:void 0}),e(f)(this,y,t)}}e(w)(x,"MAX_PRICE",5e4);class M{static checkPrice(t){return t<=e(h)(M,M,L)?"Success! Price is within acceptable limits":"Error! Price exceeds the maximum"}constructor({price:e}){this.price=e}}var L={writable:!0,value:5e4};new M({price:36e3}),new M({price:64e3});class R extends class{get email(){return this.email}set email(e){this.email=e}constructor(e){this.email=e}}{}e(w)(R,"AccessLevel",{BASIC:"basic",SUPERUSER:"superuser"});class O extends class{get email(){return this.email}set email(e){this.email=e}constructor(t){e(w)(this,"email",void 0),this.email=t}}{constructor({email:e,accessLevel:t}){super(e),this.accessLevel=t}}e(w)(O,"AccessLevel",{BASIC:"basic",SUPERUSER:"superuser"});new O({email:"mango@mail.com",accessLevel:O.AccessLevel.SUPERUSER});class S extends class{get email(){return this.email}set email(e){this.email=e}constructor(t){e(w)(this,"email",void 0),this.email=t}}{blacklist(e){this.blacklistedEmails.push(e)}isBlacklisted(e){return this.blacklistedEmails.includes(e)}constructor({email:t,accessLevel:r}){super(t),e(w)(this,"blacklistedEmails",[]),this.accessLevel=r}}e(w)(S,"AccessLevel",{BASIC:"basic",SUPERUSER:"superuser"});const j=new S({email:"mango@mail.com",accessLevel:R.AccessLevel.SUPERUSER});console.log(j.email),console.log(j.accessLevel),j.blacklist("poly@mail.com"),console.log(j.blacklistedEmails),console.log(j.isBlacklisted("mango@mail.com")),console.log(j.isBlacklisted("poly@mail.com"));
//# sourceMappingURL=10-prototypyKlasy.9ab49774.js.map
