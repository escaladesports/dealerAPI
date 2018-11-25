import axios from "axios";

const getRegularDealers = async (brand, brandKey) => {
  const res = await axios({
    method: `get`,
    url: `https://apistest.escaladesports.com/v1/dealers/territory/${brand}/map`,
    headers: {
      Authorization: `API-KEY ${brandKey}`
    }
  });

  return res.data;
};

const getPlatinumDealers = async (brand, brandKey) => {
  const res = await axios({
    method: `get`,
    url: `https://apistest.escaladesports.com/v1/dealers/list/${brand}/platinum`,
    headers: {
      Authorization: `API-KEY ${brandKey}`
    }
  });

  return res.data;
};

export { getRegularDealers, getPlatinumDealers };
