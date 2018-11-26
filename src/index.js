import fs from 'fs-extra'
import path from 'path'
import axios from 'axios'

import brands from '../config/brands'
import { getRegularDealers, getPlatinumDealers } from './request/get'

const fetchDealers = async function() {
 let data = []

 for (let brand of brands) {
  const regDealers = await getRegularDealers(brand[`name`], brand[`key`])
  const platDealers = await getPlatinumDealers(brand[`name`], brand[`key`])
  console.log(`------`)
  console.log(`Regular Dealers`)
  console.log(Object.keys(regDealers))
  console.log(`------`)
  console.log(`------`)
  console.log(`Platinum Dealers`)
  console.log(Object.keys(platDealers))
  console.log(platDealers[`error`])
  console.log(`------`)
  // await fs.outputJson(
  //   path.resolve(__dirname, `../dist/JSON/${brand.name}.json`),
  //   data
  // );
  console.log(`Built page for ${brand.name}`)
 }
}

fetchDealers()
