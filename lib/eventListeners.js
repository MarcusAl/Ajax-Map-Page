import { mapFunction, apiKey } from './map';
import { injectHtml, centerArr } from './insert';

const form = document.querySelector('form');
const locationInput = document.getElementById('locationInput');
const submitBtn = document.getElementById('submitBtn');
const handleForm = (event) => { event.preventDefault(); };

form.addEventListener('submit', handleForm);

const submitListener = () => {
  submitBtn.addEventListener('click', (event) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationInput.value}.json?access_token=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        injectHtml(data.features[0].center);
        mapFunction(centerArr);
      });
  });
};

export { submitListener };
