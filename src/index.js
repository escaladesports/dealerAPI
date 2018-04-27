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
    promises.push(
      axios.get(
        `https://apistest.escaladesports.com/v1/dealers/list/${brand.name}/all`,
        {
          headers: {
            Authorization: `API-KEY ${brand.key}`
          }
        }
      )
    );
    const results = await Promise.all(promises);
    console.log(results[0]);

    results.forEach(({ data }, i) => {
      console.log(i);
      // dealers.forEach(dealer => {
      //   const ifExist = data.find(({ id }) => id === dealer.id);
      //   if (!ifExist) {
      //     data.push(dealer);
      //   }
      // });
    });

    // await fs.outputJson(
    //   path.resolve(__dirname, `../dist/JSON/${brand}.json`),
    //   data
    // );
  }
};

fetchDealers();
