import axios from 'axios'

const request = {
 get: {
  dealers: async (brand, brandKey) => {
   const res = await axios({
    method: `get`,
    url: `https://apistest.escaladesports.com/v1/dealers/list/${brand}/all`,
    headers: {
     Authorization: `API-KEY ${brandKey}`
    }
   })

   return res.data
  }
 },
 post: {},
 update: {},
 delete: {}
}

export default request
