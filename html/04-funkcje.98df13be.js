!function(){"use strict";function o(){var o=1;console.group("arguments Details");var l=!0,r=!1,e=void 0;try{for(var n,c=arguments[Symbol.iterator]();!(l=(n=c.next()).done);l=!0){var t=n.value;o*=t,console.log("argument of arguments",t)}}catch(o){r=!0,e=o}finally{try{l||null==c.return||c.return()}finally{if(r)throw e}}return console.groupEnd(),o}function l(){console.log("Array.from()");var o=Array.from(arguments);return console.table(o),o}function r(){console.log("... (spread)");var o=Array.prototype.slice.call(arguments);return console.table(o),o}console.log("%c section1 article7 ","color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)","Pseudotablica arguments"),console.log(o,o(1,2,3)),console.log("multiply(1, 2, 3, 4)",o(1,2,3,4)),console.log("multiply(1, 2, 3, 4, 5)",o(1,2,3,4,5)),console.log("-----------------------------------------------"),console.log("%c section1 article8 ","color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)","Konwersja pseudotablicy Array.from()"),console.log(l,l(1,2,3)),console.log("fn(1, 2, 3, 4)",l(1,2,3,4)),console.log("fn(1, 2, 3, 4, 5)",l("jeden","dwa","trzy","cztery")),console.log("-----------------------------------------------"),console.log("%c section1 article8 ","color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)","Konwersja pseudotablicy ... (spread)"),console.log(r,r(1,2,3)),console.log("fn(1, 2, 3, 4)",r(1,2,3,4)),console.log("fn(1, 2, 3, 4, 5)",r("jeden","dwa","trzy","cztery")),console.log("-----------------------------------------------")}();
//# sourceMappingURL=04-funkcje.98df13be.js.map