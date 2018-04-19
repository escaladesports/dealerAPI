const dealer = async state => {
  return await fetch(
    `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/state/${state}
    `,
    {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(res => res.json());
};

const zipcodes = require('zipcodes');
let arr = [];
Object.keys(zipcodes.states.abbr).map(async state => {
  const result = await dealer(state);
  arr.push(result);
});
console.log(arr);
