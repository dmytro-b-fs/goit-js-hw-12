import axios from "axios";
import izitoast from "izitoast";



const apiKey = "56294512-5f18cb7c37608f5e527f32564";
const pixabayApiInstance = axios.create({ 
        baseURL: "https://pixabay.com/api/",   
        params: {
            key: apiKey,
        }
    })



export default function getImagesByQuery(query) {
    return pixabayApiInstance.get('', {
        params: {
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      })
      .then(response => {
        return response.data.hits;
      })
      .catch(error => {
        throw error;
      })   
}