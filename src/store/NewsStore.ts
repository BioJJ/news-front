import { defineStore } from 'pinia'

import NewsServices from '../service/news.services'
import { Article } from '../models/Article'

const service = new NewsServices()

export const newsStore = defineStore('news', {
	state: () => ({
		articles: [] as Article[]
	}),
	getters: {
		getArticles(state) {
			return state.articles
		}
	},
	actions: {
		async fetchArticle() {
			try {
				const response = await service.listNews()
				const articles = response.articles as Article[]
				this.articles = articles
			} catch (error) {
				console.error(error)
			}
		}
	}
})
