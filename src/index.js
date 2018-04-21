import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import zipcodes from 'zipcodes';
import states from 'united-states';
import cities from './cities.json';

const fetchDealersByState = async function() {
  states.map(async state => {
    const result = await axios.get(
      `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/state/${
        state.abbr
      }`
    );
    console.log(result.data);
    // result.data.dealers.map(async dealer => {
    //   await fs.outputJson(
    //     path.resolve(__dirname, `../dist/JSON/${dealer.zip}.json`),
    //     dealer
    //   );
    // });
  });
};

// const fetchDealersByCity = async function() {

// }

fetchDealersByState();
// fetchDealersByCity()
// fetchDealersByZip()
// fetchDealersByZipProx()
