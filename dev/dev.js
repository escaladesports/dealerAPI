import zipcodes from 'zipcodes';

zipcodes.lookupByState('in').map(({ zip }) => {
  console.log(zip); // logs out all zips for Indiana
});
