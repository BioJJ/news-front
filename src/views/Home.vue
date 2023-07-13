<template>
	<main class="mt-6 mx-4 md:mx-auto">
		<div class="flex justify-around px-6 pb-1">
			<span
				class="cursor-pointer"
				:class="{
					'text-[#E1681F]': isUnanswered,
					'text-gray-400': !isUnanswered
				}"
				@click="toggleExam(true)"
			>
				Artigos
			</span>
		</div>

		<div v-if="articlesList.length > 0">
			<newsLink
				v-for="news in articlesList"
				:key="news.id"
				:news="news"
				class="pt-5 cursor-pointer px-1"
			/>
			<v-pagination
				class="mt-5 mb-5"
				v-model="page"
				:length="total"
				:total-visible="7"
				rounded="circle"
			></v-pagination>
		</div>

		<div v-else class="flex items-center justify-center h-96">
			Nenhum teste encontrado
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { newsStore } from '../store/NewsStore'

import newsLink from '../components/newsLink.vue'
import { Article } from '../models/Article'

const store = newsStore()
export default defineComponent({
	components: {
		newsLink
	},
	data() {
		return {
			isUnanswered: true,
			articlesList: [] as Article[],
			pageOfItems: [],
			page: 1,
			pageSize: 5
		}
	},
	mounted() {
		this.getNews()
	},
	computed: {
		total() {
			return store.getTotalItens
		}
	},

	watch: {
		page() {
			this.getNews()
		}
	},

	methods: {
		toggleExam(value: boolean) {
			this.isUnanswered = value
		},

		async getNews() {
			await store.fetchArticle({ page: this.page, pageSize: this.pageSize })

			this.articlesList = store.getArticles
		}
	}
})
</script>
