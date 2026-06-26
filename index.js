import{a as E,s as x,i as s}from"./assets/vendor-DExePn9r.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();const M="56294512-5f18cb7c37608f5e527f32564",$=E.create({baseURL:"https://pixabay.com/api/",params:{key:M}});async function g(e,r,d){try{return(await $.get("",{params:{q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:d}})).data}catch(n){throw n}}const h=document.querySelector(".gallery"),L=document.querySelector(".loader"),b=document.querySelector(".js-load-more-btn"),B=new x(".gallery .gallery-item a",{captionsData:"alt"});function O(e){return`
        <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img src="${e.webformatURL}" width="360" height="200" alt="${e.tags}" class="gallery-image" /></a>
          <div class="gallery-info">
            <p class="gallery-info-item">
              <b>Likes</b>
              <span class="gallery-info-item-data">${e.likes}</span>
            </p>
            <p class="gallery-info-item">
              <b>Views</b>
              <span class="gallery-info-item-data">${e.views}</span>
            </p>
            <p class="gallery-info-item">
              <b>Comments</b>
              <span class="gallery-info-item-data">${e.comments}</span>
            </p>
            <p class="gallery-info-item">
              <b>Downloads</b>
              <span class="gallery-info-item-data">${e.downloads}</span>
            </p>
            </div>
        </li>
      `}function w(e){h.insertAdjacentHTML("beforeend",e.map(r=>O(r)).join("")),B.refresh()}function u(){h.innerHTML=""}function v(){L.classList.remove("hidden")}function p(){L.classList.add("hidden")}function q(){b.classList.remove("hidden")}function l(){b.classList.add("hidden")}console.log(typeof[1,2,3]);const y=document.querySelector(".form"),P=document.querySelector(".js-load-more-btn");let a,c=15,i,m;document.addEventListener("DOMContentLoaded",()=>{p()});y.addEventListener("submit",async e=>{if(e.preventDefault(),s.destroy(),a=1,i=new FormData(y),l(),i.get("search-text").trim()===""){s.error({title:"Error",message:"Empty search query",position:"topRight",timeout:3e3});return}u(),v();try{const r=await g(i.get("search-text"),a,c);r.hits.length===0?s.error({title:"Error",message:"There are no images for the specified query"}):(w(r.hits),m=document.querySelector(".gallery-info").getBoundingClientRect(),console.log(m),a*c<r.totalHits?q():(s.info({title:"Last Page",message:"We're sorry, but you've reached the end of search results."}),l()))}catch(r){s.error({title:"Error",message:"Failed to fetch images"}),console.error(r),u()}finally{p()}});P.addEventListener("click",async()=>{a++,v(),l();try{const e=await g(i.get("search-text"),a,c);w(e.hits),window.scrollBy({top:m.height*2,left:0,behavior:"smooth"}),a*c<e.totalHits?q():(s.info({title:"Last Page",message:"We're sorry, but you've reached the end of search results."}),l())}catch(e){s.error({title:"Error",message:"Failed to fetch images"}),console.error(e),u()}finally{p()}});
//# sourceMappingURL=index.js.map
