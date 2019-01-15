import fs from 'fs-extra'
import path from 'path'

import brands from '../config/brands'
import { request, api } from './request'

const fetchDealers = async () => {
	const dealers = await apiRequest.api.getDealers(
		brands[0][`name`],
		brands[0][`key`],
		1
	)
	console.log(dealers)
	//  brands.forEach(async brand => {
	//   const dealers = await apiRequest.get.dealers(brand[`name`], brand[`key`])
	//   await fs.outputJson(
	//    path.resolve(__dirname, `../dist/JSON/${brand[`name`]}.json`),
	//    dealers
	//   )
	//   console.log(`${dealers.length} dealers for ${brand[`name`]}`)
	//  })
}

fetchDealers()
