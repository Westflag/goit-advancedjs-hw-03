import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search-form');
  const input = document.querySelector('#search-input');
  const gallery = document.querySelector('#gallery');
  const loader = document.querySelector('#loader');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
      iziToast.error({ title: 'Error', message: 'Search query cannot be empty!' });
      return;
    }

    loader.style.display = 'block';
    fetchImages(query)
      .then(images => renderImages(images, gallery))
      .catch(error => iziToast.error({ message: error.message }))
      .finally(() => loader.style.display = 'none');
  });
});