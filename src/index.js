import fs from 'fs-extra'
import path from 'path'

import brands from '../config/brands'
import apiRequest from './request'

const fetchDealers = () => {
 brands.forEach(async brand => {
  const dealers = await apiRequest.get.dealers(brand[`name`], brand[`key`])
<<<<<<< HEAD
=======
  // build json pages into dist/JSON/ folder
>>>>>>> 5b99f3861abcdc78e14f5247f6b39d4638bffb48
  await fs.outputJson(
   path.resolve(__dirname, `../dist/JSON/${brand[`name`]}.json`),
   dealers
  )
  console.log(`${dealers.length} dealers for ${brand[`name`]}`)
 })
}

fetchDealers()
