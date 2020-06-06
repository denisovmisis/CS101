const key = 'SkUUvvBeYNTScxBtd5NutEQFLrfwQKAYolgAMYLx';
const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

const image = document.querySelector('.picofday');
const caption = document.querySelector('.caption');

fetch(url)
  .then(response => {
  return response.json();
})
  .then(data => {
  console.log(data);
  image.src = data.url;
  caption.innerHTML = data.explanation;
});
