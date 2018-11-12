import fs from 'fs-extra'
import path from 'path'
import axios from 'axios'
import brands from '../config/brands'

const fetchDealers = async function() {
 let data = []

 for (let brand of brands) {
  const url = `https://apis.escaladesports.com/v1/dealers/list/${
   brand.name
  }/all`
  console.log(url)
  const results = await axios.get(url, {
   headers: {
    Authorization: `API-KEY ${brand.key}`
   }
  })
  console.log(Object.keys(results.data).length)
  for (let i in results.data) {
   const ifExist = data.find(({ id }) => id === results.data[i].id)
   if (typeof results.data[i] === 'object') {
    if (!ifExist) {
     data.push(results.data[i])
    }
   }
  }

  await fs.outputJson(
   path.resolve(__dirname, `../dist/JSON/${brand.name}.json`),
   data
  )
  console.log(`Built page for ${brand.name}`)
 }
}

fetchDealers()
