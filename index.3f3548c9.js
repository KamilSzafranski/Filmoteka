!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return n.default(t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var i=document.querySelector("#cookies-btn"),a=document.querySelector("#cookies");setCookie=function(t,e,r){console.log("clicked");var n=new Date;n.setTime(n.getTime()+864e5*r);var o="expires= ".concat(n.toUTCString());document.cookie="".concat(t,"=").concat(e,"; ").concat(o,"; path=./ ")},getCookie=function(t){var e,r="cName=";return decodeURIComponent(document.cookie).split(";").forEach((function(t){0===t.indexOf(r)&&(e=t.substring(r.length))})),e},i.addEventListener("click",(function(){a.style.display="none",setCookie("cookie",!0,30)}));var c=document.querySelector(".top-button");c.addEventListener("click",(function(){return window.scrollTo({top:0,behavior:"smooth"})}));var u=document.querySelector("body"),s=document.querySelector(".footer"),l=document.querySelector(".darkmode-toggle"),f=localStorage.getItem("mode");f&&"dark"===f&&(u.classList.add("dark"),s.classList.add("dark"),l.classList.add("active")),l.addEventListener("click",(function(){if(u.classList.toggle("dark"),s.classList.toggle("dark"),!u.classList.contains("dark"))return localStorage.setItem("mode","light");localStorage.setItem("mode","dark")})),l.addEventListener("click",(function(){return l.classList.toggle("active")}));var d=document.querySelector(".js-box"),h=document.querySelector("#library"),p=document.querySelector("#home"),y=document.querySelector(".header");h.addEventListener("click",(function(t){t.preventDefault(),d.innerHTML="",d.innerHTML='<div class="js-box--padding"><button class="btn-watched btn-active" type="button">Watched</button>\n        <button class="btn-queue" type="button">Queue</button></div>',h.classList.add("nav-list__link--active"),p.classList.remove("nav-list__link--active"),y.classList.add("header--bgc")}));var v={};function g(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){g(i,n,o,a,c,"next",t)}function c(t){g(i,n,o,a,c,"throw",t)}a(void 0)}))}};var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(t){return b.default(t)||_.default(t)||x.default(t)||w.default()};var b=L(o("kMC0W")),_=L(o("7AJDX")),w=L(o("8CtQK")),x=L(o("auk6i"));function L(t){return t&&t.__esModule?t:{default:t}}var k={},E=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",y={};function v(){}function g(){}function m(){}var b={};u(b,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==r&&n.call(w,i)&&(b=w);var x=m.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function M(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=m,u(x,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=M,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(k);try{regeneratorRuntime=E}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=E:Function("r","regeneratorRuntime = r")(E)}var S,P=document.querySelector("ul.MainPage__Grid"),j=document.querySelector("template.GalleryTemplate"),M="40ed737db1bcf2c75f234fa073fa8cf6",O=document.querySelector("ul.MainPage__Grid"),T=function(t){for(var e=0;e<t;e++)P.append(j.content.cloneNode(!0))},q=(S=t(v)(t(k).mark((function e(){var r,n,o,i,a,c;return t(k).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(20),e.next=4,fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(M));case 4:return r=e.sent,e.next=7,r.json();case 7:return n=e.sent,o=n.results,e.next=11,fetch("\nhttps://api.themoviedb.org/3/genre/movie/list?api_key=".concat(M,"&language=en-US"));case 11:return i=e.sent,e.next=14,i.json();case 14:a=e.sent,c=a.genres,t(m)(O.children).forEach((function(e,r){var n='<img class="MainPage__Img skeleton" alt="Poster of movie:'.concat(o[r].title||o[r].name,'"  src="https://image.tmdb.org/t/p/w500').concat(o[r].poster_path,'" data-id="').concat(o[r].id,'"/>'),i=e.querySelectorAll("*");t(m)(i).forEach((function(t){if(t.classList.contains("MainPage__Img")&&t.remove(),t.classList.contains("ImgWrapper")&&t.firstElementChild.insertAdjacentHTML("beforebegin",n),t.classList.contains("MainPage__PhotoTitle")&&(t.classList.remove("skeleton__text"),t.textContent=o[r].title||o[r].name),t.classList.contains("MainPage__PhotoType")){t.classList.remove("skeleton__text"),t.after("|");var e=o[r].genre_ids.flatMap((function(t){return c.flatMap((function(e){return t===e.id?e.name:[]}))})).join(", ");t.textContent="".concat(""===e?"No Type":e)}t.classList.contains("MainPage__PhotoYear")&&(t.classList.remove("skeleton__text"),t.textContent=(o[r].release_date||o[r].first_air_date).substring(0,4))}))})),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[0,19]])}))),function(){return S.apply(this,arguments)});q(),window.onscroll=function(){document.body.scrollTop>230||document.documentElement.scrollTop>230?c.style.display="block":c.style.display="none"}}();
//# sourceMappingURL=index.3f3548c9.js.map
