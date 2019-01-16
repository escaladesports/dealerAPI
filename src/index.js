import fs from 'fs-extra'
import path from 'path'

import brands from '../config/brands'
import { request } from './request'

const fetchDealers = async () => {
	console.log(`In Prod ENV`)
	brands.forEach(async brand => {
		const dealers = await request.get.dealers(brand[`name`], brand[`key`])
		await fs.outputJson(
			path.resolve(__dirname, `../dist/JSON/${brand[`name`]}.json`),
			dealers
		)
		console.log(`${dealers.length} dealers for ${brand[`name`]}`)
	})
}

fetchDealers()
