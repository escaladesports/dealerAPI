import axios from 'axios'

const api = {
 getDealers: async (brand, brandKey, page) =>
  await axios({
   method: `get`,
   url: `https://apistest.escaladesports.com/v1/dealers/list/${brand}/all/${page}`,
   headers: {
    Authorization: `API-KEY ${brandKey}`
   }
  }).then(res => res.data)
}

const request = {
 get: {
  dealers: async (brand, brandKey) => {
   let page = 0
   let dealers = []
   let res = await api.getDealers(brand, brandKey, page)
   const { pages } = res
   Object.keys(res).forEach(key => {
    if (isNaN(key)) {
     delete res[key]
    }
   })
   dealers = [...dealers, ...res]
   do {
    page++
    let paginationRes = await api.getDealers(brand, brandKey, page)
    Object.keys(paginationRes).forEach(key => {
     if (isNaN(key)) {
      delete paginationRes[key]
     }
    })
    dealers = [...dealers, ...paginationRes]
   } while (page <= pages)

   return dealers
  }
 },
 post: {},
 update: {},
 delete: {}
}

export default request
