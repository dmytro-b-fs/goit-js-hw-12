
import getImagesByQuery from "./js/pixabay-api.js";
import { createGallery, showLoader, clearGallery, hideLoader, showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions.js";
import izitoast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

console.log(typeof [1, 2, 3]);

const searchForm = document.querySelector(".form");
const loadMoreButton = document.querySelector(".js-load-more-btn");
let page;
let perPage = 15;
let formData;
let galleryInfo;


document.addEventListener("DOMContentLoaded", () => {
    hideLoader();
});

searchForm.addEventListener("submit", async e => {
    e.preventDefault();
    izitoast.destroy();
    page = 1;
    formData = new FormData(searchForm);
    hideLoadMoreButton();

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

    // getImagesByQuery(formData.get("search-text"))
    // .then(response => {
    //     if (response.length === 0) {
    //         izitoast.error({
    //             title: 'Error', 
    //             message: 'There are no images for the specified query',}
    //         );
    //     }
    //     else{
    //       createGallery(response);
    //       showLoadMoreButton();
    //     }  
    //   })
    //   .catch(error => {
    //     izitoast.error({title: 'Error', message: 'Failed to fetch images'});
    //     clearGallery();
    //   })
    //   .finally(() => {
    //     hideLoader();
    //   })
    try {
      const response = await getImagesByQuery(formData.get("search-text"), page, perPage)
      if (response.hits.length === 0) {
            izitoast.error({
                title: 'Error', 
                message: 'There are no images for the specified query',}
            );
        }
        else{
          createGallery(response.hits);
          galleryInfo = document.querySelector('.gallery-info').getBoundingClientRect();
          console.log(galleryInfo);
          if ((page*perPage) < response.totalHits) {
            showLoadMoreButton();
          } else {
            izitoast.info({ title: 'Last Page', message: "We're sorry, but you've reached the end of search results." });
            hideLoadMoreButton();
          }
        }  
      }
    catch (error) {
        izitoast.error({title: 'Error', message: 'Failed to fetch images'});
        console.error(error);
        clearGallery();
      }
    finally{
        hideLoader();
      }
  
})


loadMoreButton.addEventListener("click", async () => {
  page++;
  showLoader()
  hideLoadMoreButton();
  try {
    const response = await getImagesByQuery(formData.get('search-text'),page,perPage);
    createGallery(response.hits);
    window.scrollBy({top: galleryInfo.height*2, left: 0, behavior: 'smooth'});
    if (page * perPage < response.totalHits) {
      showLoadMoreButton();
    } else {
      izitoast.info({ title: 'Last Page', message: "We're sorry, but you've reached the end of search results." });
      hideLoadMoreButton();
    }
  } catch (error) {
    izitoast.error({ title: 'Error', message: 'Failed to fetch images' });
    console.error(error);
    clearGallery();
  } finally {
    hideLoader();
  }
})



