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
    await fs.outputJson(
      path.resolve(__dirname, `../dist/state/${state.abbr}.json`),
      result.data.dealers
    );
  });
};

const fetchDealersByCity = async function() {
  states.map(state => {
    cities[state.name].map(async city => {
      const result = await axios.get(
        `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/city/${city}`
      );
      await fs.outputJson(
        path.resolve(__dirname, `../dist/city/${city}.json`),
        result.data.dealers
      );
    });
  });
};

const fetchDealersByZip = async function() {
  states.map(({ abbr }) => {
    zipcodes.lookupByState(abbr).map(async zipCode => {
      const result = await axios.get(
        `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/zip/47711/exact`
      );
      await fs.outputJson(
        path.resolve(__dirname, `../dist/zip/${zipCode}.json`),
        result.data.list
      );
    });
  });
};

const fetchDealersByZipProx = async function() {
  const prox = [30, 50, 100];
  states.map(({ abbr }) => {
    zipcodes.lookupByState(abbr).map(zipCode => {
      prox.map(async p => {
        const result = await axios.get(
          `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/zip/${zipCode}/${p}`
        );
        await fs.outputJson(
          path.resolve(__dirname, `../dist/zip/${zipCode}/${p}.json`),
          result.data.dealers
        );
      });
    });
  });
};

// fetchDealersByState();
fetchDealersByCity();
// fetchDealersByZip();
// fetchDealersByZipProx()
