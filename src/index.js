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
    const results = await axios.get(
      `https://apistest.escaladesports.com/v1/dealers/list/${brand.name}/all`,
      {
        headers: {
          Authorization: `API-KEY ${brand.key}`
        }
      }
    );

    console.log(results.data);

    //   for(let i in data){
    //     const ifExist = data.find(({ id }) => id === data[i].id);
    //     if (!ifExist){
    //       data.push(data[i])
    //     }
    //   }

    // await fs.outputJson(
    //   path.resolve(__dirname, `../dist/JSON/${brand}.json`),
    //   data
    // );
  }
};

fetchDealers();
