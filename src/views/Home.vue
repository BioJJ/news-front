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
				Artigos sobre: {{ search }}
			</span>
		</div>

		<div v-if="articlesList">
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
			Nenhum artigo encontrado
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { newsStore } from '../store/NewsStore'

import newsLink from '../components/newsLink.vue'

const store = newsStore()
export default defineComponent({
	components: {
		newsLink
	},
	data() {
		return {
			isUnanswered: true,
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
		},
		articlesList() {
			return store.getArticles
		},
		search() {
			return store.getQ
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
			await store.fetchArticle({
				q: this.search ? this.search : 'apple',
				page: this.page,
				pageSize: this.pageSize
			})
		}
	}
})
</script>
