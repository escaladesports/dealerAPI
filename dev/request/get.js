import axios from 'axios'

const getRegularDealers = async (brand, brandKey) => {
 const res = await axios({
  method: `get`,
  url: `https://apistest.escaladesports.com/v1/dealers/territory/goalsetter/map`,
  headers: {
   Authorization: `API-KEY WldNNFlqQmhORFk0TlRaaU1ETTRNRFptWWpkaE5tSmxZamswWWprMllXSQ`
  }
 })

 return res.data
}

const getPlatinumDealers = async (brand, brandKey) => {
 const res = await axios({
  method: `get`,
  url: `https://apistest.escaladesports.com/v1/dealers/list/goalsetter/platinum`,
  headers: {
   Authorization: `API-KEY WldNNFlqQmhORFk0TlRaaU1ETTRNRFptWWpkaE5tSmxZamswWWprMllXSQ`
  }
 })

 return res.data
}

export { getRegularDealers, getPlatinumDealers }
