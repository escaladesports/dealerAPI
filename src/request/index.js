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
   const { pages, errors } = res
   Object.keys(res).forEach(key => {
    if (isNaN(key)) {
     console.log(key)
     delete res[key]
    }
   })
   const updatedDealers = Object.values(res)
   dealers = [...dealers, ...updatedDealers]
   do {
    page++
    let paginatedRes = await api.getDealers(brand, brandKey, page)
    Object.keys(paginatedRes).forEach(key => {
     if (isNaN(key)) {
      delete paginatedRes[key]
     }
    })
    const paginatedDealers = Object.values(paginatedRes)
    dealers = [...dealers, ...paginatedDealers]
   } while (page <= pages)
   return dealers
  }
 },
 post: {},
 update: {},
 delete: {}
}

export default request
