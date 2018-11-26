import fs from 'fs-extra'
import path from 'path'
import axios from 'axios'

import brands from '../config/brands'
import { getRegularDealers, getPlatinumDealers } from './request/get'

const fetchDealers = async function() {
 let data = []

 brands.forEach(async brand => {
  const regDealers = await getRegularDealers(brand[`name`], brand[`key`])
  const platDealers = await getPlatinumDealers(brand[`name`], brand[`key`])

  delete regDealers[`exectime`]
  delete platDealers[`exectime`]

  if (
   (regDealers[`error`] === 0 || !regDealers[`error`]) &&
   (platDealers[`error`] === 0 || !platDealers[`error`])
  ) {
   delete regDealers[`error`]
   delete platDealers[`error`]
  } else {
   console.log(`Reg Dealers`, regDealers[`error`])
   console.log(`Plat Dealers`, platDealers[`error`])
   process.exit(1)
  }

  const updatedPlatDealers = Object.values(platDealers)
  console.log(
   updatedPlatDealers.map(dealer => {
    console.log(`hello`)
    return {
     plat: true
    }
   })
  )
  const updatedRegDealers = Object.values(regDealers)
  data = [...updatedPlatDealers, ...updatedRegDealers]
  // console.log(data)
  // await fs.outputJson(
  //   path.resolve(__dirname, `../dist/JSON/${brand.name}.json`),
  //   data
  // );
  console.log(`Built page for ${brand.name}`)
 })
}

fetchDealers()
