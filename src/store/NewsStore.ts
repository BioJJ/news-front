import { defineStore } from 'pinia'

import NewsServices from '../service/news.services'
import { Article } from '../models/Article'

const service = new NewsServices()

interface NewPagesPayload {
	page: number
	pageSize: number
}

export const newsStore = defineStore('news', {
	state: () => ({
		articles: [] as Article[],
		totalItens: 0
	}),
	getters: {
		getArticles: (state) => state.articles,
		getTotalItens: (state) => state.totalItens
	},
	actions: {
		async fetchArticle(params: NewPagesPayload) {
			try {
				const response = await service.listNews(params)
				console.log(response)
				const articles = response.articles as Article[]
				this.articles = articles
				this.totalItens = response?.totalResults as number
			} catch (error) {
				console.error(error)
			}
		}
	}
})
