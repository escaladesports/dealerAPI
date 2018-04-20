import fs from 'fs-extra';
import axios from 'axios';
import zipcodes from 'zipcodes';

const fetchDealers = async function() {
  // if folder does not exist create JSON folder
  if (await !fs.readdir(__dirname + '/dist/JSON')) {
    console.log('JSON FOLDER CREATED...');
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
      if ((await fs.readdir(__dirname + '/dist/JSON')) && dealer.zip) {
        console.log('FILE CREATED WITH ZIPCODE...');
        await fs.writeFile(__dirname + `/dist/JSON/${dealer.zip}.JSON`, dealer);
      }
    });
  });
};

fetchDealers();
