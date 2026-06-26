import simpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreButton = document.querySelector(".js-load-more-btn");

const simpleLightboxInstance = new simpleLightbox('.gallery .gallery-item a', {
          captionsData: 'alt',
        });

function itemTemplate(image){
    return `
        <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img src="${image.webformatURL}" width="360" height="200" alt="${image.tags}" class="gallery-image" /></a>
          <div class="gallery-info">
            <p class="gallery-info-item">
              <b>Likes</b>
              <span class="gallery-info-item-data">${image.likes}</span>
            </p>
            <p class="gallery-info-item">
              <b>Views</b>
              <span class="gallery-info-item-data">${image.views}</span>
            </p>
            <p class="gallery-info-item">
              <b>Comments</b>
              <span class="gallery-info-item-data">${image.comments}</span>
            </p>
            <p class="gallery-info-item">
              <b>Downloads</b>
              <span class="gallery-info-item-data">${image.downloads}</span>
            </p>
            </div>
        </li>
      `
}

export function createGallery(images){
    gallery.insertAdjacentHTML('beforeend', images.map(image => itemTemplate(image)).join(""));
    simpleLightboxInstance.refresh();
}

export function clearGallery(){
    gallery.innerHTML = '';
}

export function showLoader(){
    loader.classList.remove('hidden');
}

export function hideLoader(){
    loader.classList.add('hidden');
}

export function showLoadMoreButton(){
    loadMoreButton.classList.remove('hidden');
}

export function hideLoadMoreButton(){
    loadMoreButton.classList.add('hidden');
}