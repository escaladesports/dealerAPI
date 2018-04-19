import fs from 'fs-extra';
import axios from 'axios';
import zipcodes from 'zipcodes';

export default async function() {
  // if folder does not exist create JSON folder
  if (!fs.readdir(__dirname, '/dist/JSON')) {
    await fs.mkdir(__dirname + '/dist/JSON');
  }

  // Loop through states and pass into dealer API
  Object.keys(zipcodes.states.abbr).map(async state => {
    const result = await axios.get(
      `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/state/${state}`
    );
    // Loop through dealers and create file name by zip with contents of dealer
    // This will override older files, so essentailly "updating" it as well
    result.data.dealers.map(async dealer => {
      fs.writeFile(`${__dirname}/dist/JSON/${dealer.zip}.JSON`, dealer);
    });
  });
}
