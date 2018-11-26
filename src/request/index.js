import axios from 'axios'

const request = {
 get: {
  dealers: async (brand, brandKey, page) => {
   const res = await axios({
    method: `get`,
    url: `https://apistest.escaladesports.com/v1/dealers/list/${brand}/all/${page}`,
    headers: {
     Authorization: `API-KEY ${brandKey}`
    }
   }).data

   return res
  }
 },
 post: {},
 update: {},
 delete: {}
}

export default request
