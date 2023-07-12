import { NewsApiResponse } from '@/models/ApiResponse'
import api from '../helpers/axios'
import config from '../helpers/config'
const BASE_URL = config.baseURL

export default class NewsServices {
	async listNews() {
		try {
			const data = await api.get<NewsApiResponse>(`${BASE_URL}`)
			return data.data
		} catch (error) {
			alert(error)
			console.log(error)
		}
	}

	fetchNews() {
		return fetch(`${BASE_URL}`, {})
	}
}
