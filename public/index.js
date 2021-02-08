  "use strict";

  const button = document.getElementById('fetchData');
  button.addEventListener('click', (event) => {
  fetch('http://localhost:3000/data')
    .then(res => res.json())
    .then(data => {
      console.log('data',data);

    })
    .catch(err => {
      console.log('fetch err',err)
    })
});
