import axios from 'axios';

axios
  .get(
    'https://apis.escaladesports.com/v1/dealers/territory/goalrilla/state/ar'
  )
  .then(res => console.log(res.data.dealers))
  .catch(err => console.log(err));
