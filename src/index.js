import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import zipcodes from 'zipcodes';

const fetchDealers = async function() {
  await fs.outputJson(
    path.resolve(__dirname, '../dist/JSON/testFile.json', { name: 'Taylor' })
  );
  // Object.keys(zipcodes.states.abbr).map(async state => {
  //   const result = await axios.get(
  //     `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/state/${state}`
  //   );

  //   result.data.dealers.map(async dealer => {
  //     const file = path.resolve(__dirname, `../dist/JSON/${dealer.zip}.json`);
  //     await fs.outputJson(file, dealer);
  //   });
  // });
};
console.log('directory name --> ', path.resolve(__dirname, '../'));

fetchDealers().then(async () => {
  const rootFolder = await fs.readdir(path.resolve(__dirname, '../'));
  console.log('List all directories inside of root', rootFolder);
});
