import fs from 'fs-extra'
import path from 'path'

import brands from '../config/brands'
import apiRequest from './request'

const fetchDealers = () => {
 let data = []

 brands.forEach(async brand => {
  const dealers = await apiRequest.get.dealers(brand[`name`], brand[`key`])
  const keys = Object.keys(dealers)
  keys.forEach(key => {
   if (isNaN(key)) {
    console.log(key)
   }
  })

  await fs.outputJson(
   path.resolve(__dirname, `../dist/JSON/${brand[`name`]}.json`),
   data
  )
  console.log(`Built page for ${brand[`name`]}`)
 })
}

fetchDealers()
