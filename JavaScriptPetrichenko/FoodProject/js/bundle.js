(()=>{"use strict";function e(e){e.classList.remove("show"),e.classList.add("hide"),document.body.style.overflow=""}function t(e,t){e.classList.remove("hide"),e.classList.add("show"),document.body.style.overflow="hidden",t&&clearInterval(t)}window.addEventListener("DOMContentLoaded",(n=>{(function(e,t,n,o){const s=document.querySelectorAll(e),r=document.querySelectorAll(t),a=document.querySelector(n);function c(){r.forEach((e=>{e.classList.remove("show","fade"),e.classList.add("hide")})),s.forEach((e=>{e.classList.remove(o)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[e].classList.remove("hide"),r[e].classList.add("show","fade"),s[e].classList.add(o)}c(),i(),a.addEventListener("click",(t=>{const n=t.target;n.matches(e)&&s.forEach(((e,t)=>{n===e&&(c(),i(t))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o){const s=document.querySelector(o);document.querySelectorAll(n).forEach((e=>{e.addEventListener("click",(()=>{t(s,r)}))})),s.addEventListener("click",(t=>{const n=t.target;(n.matches(".modal")||""===n.getAttribute("data-close"))&&e(s)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&s.classList.contains("show")&&e(s)}));const r=setTimeout((()=>t(s,r)),5e4);window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(s,r),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal"),function(e,t){const n=document.querySelector(e),o=n.querySelector("#days"),s=n.querySelector("#hours"),r=n.querySelector("#minutes"),a=n.querySelector("#seconds"),c=setInterval(l,1e3);function i(e){return e>=0&&e<10?`0${e}`:e}function l(){const e=function(e){const t=Date.parse(e)-new Date;return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60),total:t}}(t);e.total<=0?clearInterval(c):(o.innerHTML=i(e.days),s.innerHTML=i(e.hours),r.innerHTML=i(e.minutes),a.innerHTML=i(e.seconds))}l()}(".timer","2023-04-20T12:00:00"),function(){class e{constructor(e,t,n,o,s,r){this.title=e,this.description=t,this.price=+n,this.imageSrc=o,this.imageAlt=s;for(var a=arguments.length,c=new Array(a>6?a-6:0),i=6;i<a;i++)c[i-6]=arguments[i];this.classes=c.length?c:["menu__item"],this.parent=document.querySelector(r),this.transfer=18,this.changeToMDL()}changeToMDL(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");e.classList.add(...this.classes),e.innerHTML=`\n        <img src="${this.imageSrc}" alt="${this.imageAlt}">\n        <h3 class="menu__item-subtitle">${this.title}</h3>\n        <div class="menu__item-descr">${this.description}</div>\n        <div class="menu__item-divider"></div>\n        <div class="menu__item-price">\n          <div class="menu__item-cost">Цена:</div>\n          <div class="menu__item-total"><span>${this.price}</span> леев/день</div>\n        </div>\n      `,this.parent.append(e)}}(async e=>{const t=await fetch("http://localhost:3000/menu");if(!t.ok)throw new Error(`${t.status}: ${t.statusText}`);return await t.json()})().then((t=>{t.forEach((t=>{new e(t.title,t.description,t.price,t.img,t.altimg,".menu__field .container").render()}))})).catch((e=>console.error(e)))}(),function(){const e=document.querySelector(".calculating__result span");let t,n,o,s=localStorage.getItem("sex")||localStorage.setItem("sex","female")||"female",r=localStorage.getItem("ratio")||localStorage.setItem("ratio",1.55)||1.55;function a(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),(e.getAttribute("id")===localStorage.getItem("sex")||e.getAttribute("data-ratio")===localStorage.getItem("ratio"))&&e.classList.add(t)}))}function c(){e.textContent=s&&t&&n&&o&&r?"female"===s?Math.round((447.6+9.2*n+3.1*t-4.3*o)*r):Math.round((88.36+13.4*n+4.8*t-5.7*o)*r):"____"}function i(e,t){const n=document.querySelector(e),o=n.querySelectorAll("div");n.addEventListener("click",(e=>{e.target.matches(".calculating__choose-item")&&(e.target.getAttribute("data-ratio")?(r=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",r)):(s=e.target.getAttribute("id"),localStorage.setItem("sex",s)),o.forEach((e=>{e.classList.remove(t)})),e.target.classList.add(t),c())}))}function l(e){const s=document.querySelector(e);s.addEventListener("input",(()=>{switch(s.value.match(/\D/g)?s.style.border="1px solid red":s.style.border="none",s.getAttribute("id")){case"height":t=+s.value;break;case"weight":n=+s.value;break;case"age":o=+s.value}c()}))}a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender","calculating__choose-item_active"),i(".calculating__choose_big","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n){function o(n){const o=document.querySelector(".modal"),s=o.firstElementChild;s.classList.add("hide"),t(o);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n        <div class="modal__content">\n          <div data-close class="modal__close">&times;</div>\n          <div class="modal__title">${n}</div>\n        </div>\n      `,o.append(r),setTimeout((()=>{r.remove(),s.classList.remove("hide"),e(o)}),3e3)}document.querySelectorAll(n).forEach((e=>function(e){e.addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="icons/spinner.svg",n.style.cssText="display: block; margin: auto;",e.insertAdjacentElement("afterend",n);const s=new FormData(e);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((e=>{console.log(e),o("Спасибо! Мы скоро с вами свяжемся"),n.remove()})).catch((e=>{console.error(e),o("Что-то пошло не так...")})).finally((()=>e.reset()))}))}(e)))}("form"),function(e){let{container:t,slide:n,nextArrow:o,prevArrow:s,totalCounter:r,currentCounter:a,wrapper:c}=e;const i=document.querySelector(t),l=document.querySelector(c),d=l.firstElementChild,u=d.querySelectorAll(n),m=document.querySelector(s),h=document.querySelector(o),g=document.querySelector(r),f=document.querySelector(a),v=window.getComputedStyle(l).width;let _=1,p=0;g.textContent=u.length<10?`0${u.length}`:u.length,f.textContent=_<10?`0${_}`:_,d.style.cssText=`\n    width: ${100*u.length}%;\n    display: flex;\n    transition: 0.5s all;\n  `,l.style.overflow="hidden",u.forEach((e=>{e.style.width=v})),i.style.position="relative";const y=document.createElement("ol"),L=[];y.classList.add("carousel-indicators"),i.append(y);for(let e=0;e<u.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.classList.add("dot"),e||(t.style.opacity=1),y.append(t),L.push(t)}const w=()=>{d.style.transform=`translateX(-${p}px)`,f.textContent=_<10?`0${_}`:_,L.forEach(((e,t)=>e.style.opacity=_-1===t?"1":".5"))};y.addEventListener("click",(e=>{e.target.matches("li")&&(_=+e.target.dataset.slideTo,p=parseInt(v)*(_-1),w())})),h.addEventListener("click",(()=>{p===parseInt(v)*(u.length-1)?p=0:p+=parseInt(v),_=_===u.length?1:_+1,w()})),m.addEventListener("click",(()=>{p?p-=parseInt(v):p=parseInt(v)*(u.length-1),_=1===_?u.length:_-1,w()}))}({container:".offer__slider",wrapper:".offer__slider-wrapper",slide:".offer__slide",prevArrow:".offer__slider-prev",nextArrow:".offer__slider-next",totalCounter:"#total",currentCounter:"#current"})}))})();
//# sourceMappingURL=bundle.js.map