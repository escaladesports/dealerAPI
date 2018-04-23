import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import fetch from 'fetch-retry';
import zipcodes from 'zipcodes';
import states from 'united-states';
import brands from '../config/brands';

const fetchDealers = async function() {
  let promises = [];
  let data = [];
  for (let brand of brands) {
    for (let { abbr } of states) {
      promises.push(
        axios.get(
          `https://apistest.escaladesports.com/v1/dealers/territory/${brand}/state/${abbr}`
        )
      );
    }
    const results = await Promise.all(promises);
    results.forEach(({ data: { dealers } }) => {
      if (dealers.length > 0) {
        dealers.forEach(dealer => {
          const ifExist = data.find(({ id }) => id === dealer.id);
          if (!ifExist) {
            data.push(dealer);
          }
        });
      }
    });
    await fs.outputJson(
      path.resolve(__dirname, `../dist/JSON/${brand}.json`),
      data
    );
  }
};

fetchDealers();
