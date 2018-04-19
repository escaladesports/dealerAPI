import fs from 'fs-extra';
import axios from 'axios';
import zipcodes from 'zipcodes';

export default async function() {
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
    console.log(result);
    arr.push(result);
  });
  console.log('ARR --> ', arr);
}
