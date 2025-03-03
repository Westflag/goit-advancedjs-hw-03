// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';


export function renderImages(images, gallery) {
  gallery.innerHTML = '';
  images.forEach((image) => {
    const card = document.createElement('div');
    card.classList.add('image-card');
    card.innerHTML = `
            <a href="${image.largeImageURL}" data-lightbox="gallery">
                 <img src="${image.webformatURL}" alt="${image.tags}" class="thumbnail" />
            </a>
            <div class="image-info">
                <div class="info-field">
                  <h3>Likes</h3>
                  <p>${image.likes}</p>
                </div>

                <div class="info-field">
                  <h3>Views</h3>
                  <p>${image.views}</p>
                </div>
                <div class="info-field">
                  <h3>Comments</h3>
                  <p> ${image.comments}</p>
                </div>
                <div class="info-field">
                  <h3>Downloads</h3>
                  <p>${image.downloads}</p>
                </div>
            </div>
        `;
    gallery.appendChild(card);
  });
  new SimpleLightbox('[data-lightbox=\'gallery\']').refresh();
}