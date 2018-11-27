import fs from 'fs-extra'
import path from 'path'

import brands from '../config/brands'
import apiRequest from './request'

const fetchDealers = () => {
 brands.forEach(async brand => {
  console.log(brand, brand[`key`])
  const dealers = await apiRequest.get.dealers(brand[`name`], brand[`key`])
  // build json pages into dist/JSON/ folder
  await fs.outputJson(
   path.resolve(__dirname, `../dist/JSON/${brand[`name`]}.json`),
   dealers
  )
  console.log(`${dealers.length} dealers for ${brand[`name`]}`)
 })
}

fetchDealers()
