const form = document.querySelector('form');
const imgDiv = document.querySelector('img');
const API_KEY =  'REPLACE ME';
const errorMessageContainer = document.querySelector('#error-message-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = document.querySelector('#search').value;
  search(searchTerm);
})

const search = (searchTerm) => {
  hideErrorMessage();
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    imgDiv.src = response.data.images.original.url;
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
    displayErrorMessage("Error. Please try again");
  });
}

const displayErrorMessage = (errorMessage) => {
  errorMessageContainer.classList.remove('hidden');
  errorMessageContainer.textContent = errorMessage;
}

const hideErrorMessage = () => {
  errorMessageContainer.classList.add('hidden');
}

