const city = document.querySelector('#city');
const btn = document.querySelector('#weather');
const output = document.querySelector('#result');

// API related Constant
const BASE = 'http://api.weatherstack.com/';
const KEY = '14a5ac57d94f1ca14f1b53bb5cb249d9';

// Action
btn.addEventListener('click', () => {
  let cityVal = city.value;
  fetch(`${BASE}/current?access_key=${KEY}&query=${cityVal}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      output.innerHTML = `
      <br/><table border="1">
      <tr>
      <td>Name</td>
      <td>Country</td>
      <td>Latitude</td>
      <td>Longitude</td>
      <td>Temperature</td>
      </tr>
      <tr>
      <td>${result.location.name}</td>
      <td>${result.location.country}</td>
      <td>${result.location.lat}</td>
      <td>${result.location.lon}</td>
      <td>${result.current.temperature}</td>
      </tr>
      </table>
          `;
    })
    .catch((err) => console.log(err));
});

/* 
http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York

*/
