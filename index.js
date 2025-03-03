import{S as a,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function l(i){const o=`https://pixabay.com/api/?key=49152661-7859b232d7a733d1d995afa08&q=${encodeURIComponent(i)}&image_type=photo`;return fetch(o).then(t=>t.json()).then(t=>{if(t.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please, try again!");return t.hits})}function d(i,n){n.innerHTML="",i.forEach(o=>{const t=document.createElement("div");t.classList.add("image-card"),t.innerHTML=`
            <a href="${o.largeImageURL}" data-lightbox="gallery">
                 <img src="${o.webformatURL}" alt="${o.tags}" class="thumbnail" />
            </a>
            <div class="image-info">
                <div class="info-field">
                  <h3>Likes</h3>
                  <p>${o.likes}</p>
                </div>

                <div class="info-field">
                  <h3>Views</h3>
                  <p>${o.views}</p>
                </div>
                <div class="info-field">
                  <h3>Comments</h3>
                  <p> ${o.comments}</p>
                </div>
                <div class="info-field">
                  <h3>Downloads</h3>
                  <p>${o.downloads}</p>
                </div>
            </div>
        `,n.appendChild(t)}),new a("[data-lightbox='gallery']").refresh()}document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("#search-form"),n=document.querySelector("#search-input"),o=document.querySelector("#gallery"),t=document.querySelector("#loader");i.addEventListener("submit",e=>{e.preventDefault();const r=n.value.trim();if(!r){c.error({title:"Error",message:"Search query cannot be empty!"});return}t.style.display="block",l(r).then(s=>d(s,o)).catch(s=>c.error({message:s.message})).finally(()=>t.style.display="none")})});
//# sourceMappingURL=index.js.map
