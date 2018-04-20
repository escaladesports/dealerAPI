import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import zipcodes from 'zipcodes';

const fetchDealers = async function() {
  Object.keys(zipcodes.states.abbr).map(async state => {
    const result = await axios.get(
      `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/state/${state}`
    );

    result.data.dealers.map(async dealer => {
      const file = path.resolve(__dirname, `../dist/JSON/${dealer.zip}.json`);
      console.log('File path --> ', file);
      await fs.outputJson(file, dealer);
      const jsonFolder = await fs.readdir(
        path.resolve(__dirname, `../dist/JSON`)
      );
      console.log('JSON folder --> ', jsonFolder);
    });
  });
};

fetchDealers();
