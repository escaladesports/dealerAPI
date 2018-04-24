import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import fetch from 'fetch-retry';
import zipcodes from 'zipcodes';
import states from 'united-states';
import brands from '../config/brands';


const res = await axios.get(
  `https://apistest.escaladesports.com/v1/dealers/territory/goalrilla/state/ar`
);
console.log('HQ ID --> ', res.data.hq.id);
res.data.dealers.map(dealer => {
  if (dealer.id === res.data.hq.id) {
    console.log(dealer.id);
  }
});

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
    results.forEach(({ data: { dealers, hq } }) => {
      if (dealers.length > 0) {
        dealers.forEach(dealer => {
          if(hq.id === dealer.id) {
            dealer.brand = hq.brand;
          } else {
            dealer.brand = {
              [brand]: {
                "error": 0
              }
            }
          }
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
