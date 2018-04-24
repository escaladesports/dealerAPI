import axios from 'axios';
import zipcodes from 'zipcodes';
import fetch from 'fetch-retry';

fetch(url)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err));

const radius = zipcodes.radius(47711, 100);

console.log(radius);
