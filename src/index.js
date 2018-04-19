import fs from 'fs-extra';

export default async function() {
  await fs.mkdir(__dirname + '/dist/JSON');
  if (fs.readdir(__dirname + '/dist/JSON')) {
    // loop through zip codes here
    // make fetch call for each zip code here
    // fs.writeFile(`${__dirname}/dist/JSON/${zip}.JSON`, res.data.zip) for each zipcode
  }
}
