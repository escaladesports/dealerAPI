import zipcodes from 'zipcodes';

zipcodes.lookupByState('in').map(zipCode => {
  console.log(zipCode);
});
