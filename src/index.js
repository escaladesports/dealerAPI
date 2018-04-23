import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import fetch from 'fetch-retry';
import zipcodes from 'zipcodes';
import states from 'united-states';
import brands from '../config/brands';

const fetchDealers = async function() {
  let data = [];
  for (let brand of brands) {
    for (let { abbr } of states) {
      let result = await axios.get(
        `https://apis.escaladesports.com/v1/dealers/territory/${brand}/state/${abbr}/`
      );
      result = result.data.dealers;
      if (result.length > 0) {
        result.map(dealer => {
          const ifExist = data.filter(({ id }) => id === dealer.id);
          if (ifExist.length === 0) {
            data.push(dealer);
          }
        });
      }
    }
    await fs.outputJson(
      path.resolve(__dirname, `../dist/JSON/${brand}.json`),
      data
    );
  }
};

fetchDealers();
