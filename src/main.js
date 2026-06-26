
import getImagesByQuery from "./js/pixabay-api.js";
import { createGallery, showLoader, clearGallery, hideLoader } from "./js/render-functions.js";
import izitoast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

console.log(typeof [1, 2, 3]);

const searchForm = document.querySelector(".form");


document.addEventListener("DOMContentLoaded", () => {
    hideLoader();
});

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    izitoast.destroy();
    const formData = new FormData(searchForm);

    if (formData.get('search-text').trim() === '') {
      izitoast.error({
        title: 'Error',
        message: 'Empty search query',
        position: 'topRight',
        timeout: 3000,
      });
      return;
    }

    clearGallery()
    showLoader()

    getImagesByQuery(formData.get("search-text"))
    .then(response => {
        if (response.length === 0) {
            izitoast.error({
                title: 'Error', 
                message: 'There are no images for the specified query',}
            );
        }
        else{createGallery(response);}  
      })
      .catch(error => {
        
        izitoast.error({title: 'Error', message: 'Failed to fetch images'});
        clearGallery();
      })
      .finally(() => {
        hideLoader();
      })
  
})



