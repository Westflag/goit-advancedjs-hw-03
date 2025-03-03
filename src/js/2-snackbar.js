// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value, 10);
  const state = event.target.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then((delay) => {
        const message = `✅ Fulfilled after ${delay}ms`;
        console.log(message);
        iziToast.show({
          message: message,
        });
      },
    )
    .catch((delay) => {
      const message = `❌ Rejected after ${delay}ms`;
      console.error(message);
      iziToast.error({
        message: message,
      });
    });
});
