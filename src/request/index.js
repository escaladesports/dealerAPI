import axios from 'axios'

const request = {
 get: {
  dealers: async (brand, brandKey) => {
   let page = 3
   let dealers = []
   const res = await axios({
    method: `get`,
    url: `https://apistest.escaladesports.com/v1/dealers/list/${brand}/all/${page}`,
    headers: {
     Authorization: `API-KEY ${brandKey}`
    }
   }).then(res => res.data)
   const { total, perpage, pages } = res
   Object.keys(res).forEach(key => {
    if (isNaN(key)) {
     delete dealers[key]
    }
   })
   return res
  }
 },
 post: {},
 update: {},
 delete: {}
}

export default request
