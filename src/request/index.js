import axios from 'axios'

const api = {
 getDealers: async (brand, brandKey, page) =>
  await axios({
   method: `get`,
   url: `https://apis.escaladesports.com/v1/dealers/list/${brand}/all/${page}`,
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
   const { pages, errors, error } = res
   if ((errors || error) && error !== 1) {
    console.log(
     `Error for ${brand}:  ERRORS: ${
      errors ? JSON.stringify(errors) : ``
     }, ERROR: ${error ? JSON.stringify(error) : ``}`
    )
   }
   Object.keys(res).forEach(key => {
    if (isNaN(key)) {
     delete res[key]
    }
   })
   const updatedDealers = Object.values(res)
   dealers = [...dealers, ...updatedDealers]
   do {
    page++
    let paginatedRes = await api.getDealers(brand, brandKey, page)
    const { errors, error } = paginatedRes
    if ((errors || error) && error !== 1) {
     console.log(
      `Error for ${brand}:  ERRORS: ${
       errors ? JSON.stringify(errors) : ``
      }, ERROR: ${error ? JSON.stringify(error) : ``}`
     )
    }
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
