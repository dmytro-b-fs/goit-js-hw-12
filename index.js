import{a as m,s as u,i as o}from"./assets/vendor-DExePn9r.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const y="56294512-5f18cb7c37608f5e527f32564",g=m.create({baseURL:"https://pixabay.com/api/",params:{key:y}});function h(t){return g.get("",{params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{throw r})}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),b=new u(".gallery .gallery-item a",{captionsData:"alt"});function L(t){return`
        <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img src="${t.webformatURL}" width="360" height="200" alt="${t.tags}" class="gallery-image" /></a>
          <div class="gallery-info">
            <p class="gallery-info-item">
              <b>Likes</b>
              <span class="gallery-info-item-data">${t.likes}</span>
            </p>
            <p class="gallery-info-item">
              <b>Views</b>
              <span class="gallery-info-item-data">${t.views}</span>
            </p>
            <p class="gallery-info-item">
              <b>Comments</b>
              <span class="gallery-info-item-data">${t.comments}</span>
            </p>
            <p class="gallery-info-item">
              <b>Downloads</b>
              <span class="gallery-info-item-data">${t.downloads}</span>
            </p>
            </div>
        </li>
      `}function w(t){f.innerHTML=t.map(r=>L(r)).join(""),b.refresh()}function l(){f.innerHTML=""}function v(){p.style.display=""}function d(){p.style.display="none"}console.log(typeof[1,2,3]);const c=document.querySelector(".form");document.addEventListener("DOMContentLoaded",()=>{d()});c.addEventListener("submit",t=>{t.preventDefault(),o.destroy();const r=new FormData(c);if(r.get("search-text").trim()===""){o.error({title:"Error",message:"Empty search query",position:"topRight",timeout:3e3});return}l(),v(),h(r.get("search-text")).then(s=>{s.length===0?o.error({title:"Error",message:"There are no images for the specified query"}):w(s)}).catch(s=>{o.error({title:"Error",message:"Failed to fetch images"}),l()}).finally(()=>{d()})});
//# sourceMappingURL=index.js.map
