import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import fetch from 'fetch-retry';
import zipcodes from 'zipcodes';
import states from 'united-states';
import brands from '../config/brands';

const fetchDealersByZip = async function() {
  let data = [];
  for (let brand of brands) {
    for (let { abbr } of states) {
      for (let { zip } of zipcodes.lookupByState(abbr)) {
        let result = await axios.get(
          `https://apis.escaladesports.com/v1/dealers/territory/${brand}/zip/${zip}/exact`
        );
        data.concat(result.data.list);
      }
    }
    await fs.outputJson(
      path.resolve(__dirname, `../dist/JSON/${brand}.json`),
      data
    );
  }
};

fetchDealersByZip();
