export function fetchImages(query) {
  const API_KEY = '49152661-7859b232d7a733d1d995afa08';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;
  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please, try again!');
      }
      return data.hits;
    });
}