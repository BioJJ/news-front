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
		</div>

		<div v-else class="flex items-center justify-center h-96">
			Nenhum teste encontrado
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { mapState } from 'pinia'
import { newsStore } from '../store/NewsStore.ts'

import newsLink from '../components/newsLink.vue'
import { Article } from '@/models/Article'

const store = newsStore()
export default defineComponent({
	components: {
		newsLink
	},
	data() {
		return {
			isUnanswered: true,
			newsList: [
				{
					id: 1,
					title: 'Noticia 1',
					author: 'Pandora'
				},
				{
					id: 2,
					title: 'Noticia 2',
					author: 'Freddinho'
				},
				{
					id: 3,
					title: 'Noticia 3',
					author: 'Snow'
				},
				{
					id: 4,
					title: 'Noticia 4',
					author: 'Brutus'
				}
			],
			articlesList: [] as Article[]
		}
	},
	async mounted() {
		console.log('O componente foi montado!')

		await store.fetchArticle()

		this.articlesList = await store.getArticles
	},
	// computed: {
	// 	...mapState(useQuizStore, ['answered', 'unanswered']),
	// 	exams() {
	// 		return this.isUnanswered ? this.unanswered : this.answered
	// 	}
	// },
	methods: {
		toggleExam(value: boolean) {
			this.isUnanswered = value
		}
	}
})
</script>
