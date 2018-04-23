import axios from 'axios';
import goalrilla from '../dist/JSON/goalrilla.json';

goalrilla.map(dealer => {
  console.log(
    'NAME --> |',
    dealer.name,
    '| ADDRESS --> |',
    dealer.address,
    '|'
  );
});
