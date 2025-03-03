// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('datetime-picker');
  const startButton = document.querySelector('[data-start]');
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');


  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const selectedDate = selectedDates[0];
      const currentDate = new Date();

      if (isNaN(selectedDate.getTime()) || selectedDate <= currentDate) {
        startButton.disabled = true;
        iziToast.error({
          message: 'Please choose a date in the future',
        });
      } else {
        console.log('Enable button');
        startButton.disabled = false;
      }

    },
  };

  flatpickr(input, options);

  let countdownInterval;

  startButton.addEventListener('click', () => {
    const selectedDate = new Date(input.value);

    startButton.disabled = true;
    input.disabled = true;
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
      const now = new Date();
      const timeDiff = selectedDate - now;

      if (timeDiff <= 0) {
        input.disabled = false;
        clearInterval(countdownInterval);
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        iziToast.show({
          title: 'Hey',
          message: 'Countdown finished!',
        });
        return;
      }

      const diff = convertMs(timeDiff);

      daysElement.textContent = String(diff.days).padStart(2, '0');
      hoursElement.textContent = String(diff.hours).padStart(2, '0');
      minutesElement.textContent = String(diff.minutes).padStart(2, '0');
      secondsElement.textContent = String(diff.seconds).padStart(2, '0');
    }, 1000);
  });

  startButton.disabled = true;
});


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
