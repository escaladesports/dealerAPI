import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import zipcodes from 'zipcodes';

const fetchDealers = async function() {
  await fs.outputJson(path.resolve(__dirname, '../dist/JSON/testFile.json'), {
    name: 'Taylor'
  });
  await Object.keys(zipcodes.states.abbr).map(async state => {
    const result = await axios.get(
      `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/state/${state}`
    );

    result.data.dealers.map(async dealer => {
      await fs.outputJson(
        path.resolve(__dirname, `../dist/JSON/${dealer.zip}.json`),
        dealer
      );
    });
  });
};

fetchDealers().then(async () => {
  const rootFolder = await fs.readdir(path.resolve(__dirname, '../dist/JSON'));
  console.log('List all directories inside of JSON -->', rootFolder);
});
