import { NewsApiResponse } from '@/models/ApiResponse'
import api from '../helpers/axios'

interface NewPagesPayload {
	page: number
	pageSize: number
}
export default class NewsServices {
	async listNews(params: NewPagesPayload) {
		try {
			const data = await api.get<NewsApiResponse>('', { params })
			return data.data
		} catch (error) {
			alert(error)
			console.log(error)
		}
	}

	fetchNews() {
		return fetch(``, {})
	}
}
