import fs from 'fs-extra';
import axios from 'axios';

export default async function() {
  const zipcodes = require('zipcodes');
  let arr = [];
  Object.keys(zipcodes.states.abbr).map(async state => {
    const result = await axios.get(
      `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/state/${state}`
    );
    // await fs.mkdir(__dirname + '/dist/JSON');
    // if (fs.readdir(__dirname + '/dist/JSON')) {
    // loop through zip codes here
    // make fetch call for each zip code here
    // fs.writeFile(`${__dirname}/dist/JSON/${zip}.JSON`, res.data.zip) for each zipcode
    // }
    arr.push(result);
  });
  console.log(arr);
}
