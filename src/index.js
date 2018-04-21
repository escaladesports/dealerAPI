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
    console.log(result.data[state.abbr.toLowerCase()]);
    // await fs.outputJson(
    //   path.resolve(__dirname, `../dist/state/${state.abbr}.json`),
    //   result.data[state.abbr]
    // );
  });
};

const fetchDealersByCity = async function() {
  states.map(state => {
    cities[state.name].map(async city => {
      const result = await axios.get(
        `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/city/${city}`
      );

      console.log(result.data);
    });
  });
};

const fetchDealersByZip = async function() {
  states.map(({ abbr }) => {
    zipcodes.lookupByState(abbr).map(async zipCode => {
      const result = await axios.get(
        `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/zip/${zipCode}/exact`
      );

      console.log(result.data);
    });
  });
};

const fetchDealerByZipProx = async function() {
  const prox = [30, 50, 100];
  states.map(({ abbr }) => {
    zipcodes.lookupByState(abbr).map(zipCode => {
      prox.map(async p => {
        const result = await axios.get(
          `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/zip/${zipCode}/${p}`
        );

        console.log(result.data);
      });
    });
  });
};

fetchDealersByState();
// fetchDealersByCity()
// fetchDealersByZip()
// fetchDealersByZipProx()
