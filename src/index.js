import fs from 'fs-extra'
import path from 'path'

import brands from '../config/brands'
import { request } from './request'

const createJson = async (brand) => {
	const dealers = await request.get
		.dealers(brand[`name`], brand[`key`])
		.catch(err => {
			console.log(err)
			process.exit(1)
		})

	const updatedDealers = dealers.map(dealer => {
		return {
			...dealer,
			web: dealer.web.includes('dickssportinggoods') ? brand.dicksWeb || dealer.web : dealer.web
		}
	})

	await fs.outputJson(
		path.resolve(__dirname, `../dist/JSON/${brand[`name`]}.json`),
		updatedDealers
	)
	console.log(`${updatedDealers.length} dealers for ${brand[`name`]}`)
}

const fetchDealers = async () => {
	const promises = []
	brands.forEach(brand => {
		promises.push(createJson(brand))
	})

	await Promise.all(promises)
}

fetchDealers()
