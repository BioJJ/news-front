import { defineStore } from 'pinia'

import NewsServices from '../service/news.services'
import { Article } from '../models/Article'

const service = new NewsServices()

interface NewPagesPayload {
	page: number
	pageSize: number
	q: string
}

export const newsStore = defineStore('news', {
	state: () => ({
		articles: [] as Article[],
		totalItens: 0,
		newsSelected: [] as Article[],
		q: ''
	}),
	getters: {
		getArticles: (state) => state.articles,
		getTotalItens: (state) => state.totalItens,
		getNewsSelected: (state) => state.newsSelected,
		getQ: (state) => state.q
	},
	actions: {
		async fetchArticle(params: NewPagesPayload) {
			try {
				const response = await service.listNews(params)
				this.articles = response?.articles as Article[]
				this.totalItens = response?.totalResults as number
				this.q = params.q
			} catch (error) {
				console.error(error)
			}
		},

		async fetchSearchArticle(params: NewPagesPayload) {
			try {
				const response = await service.listNews(params)
				this.articles = response?.articles as Article[]
				this.totalItens = response?.totalResults as number
				this.q = params.q
			} catch (error) {
				console.error(error)
			}
		},

		fetchNewsSelected(selected: Article[]) {
			this.newsSelected = selected
		},

		fetchSearchWord(q: string) {
			this.q = q
		}
	}
})
