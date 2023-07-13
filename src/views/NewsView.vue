<template>
	<main class="mx-4 md:mx-auto flex-1 md:w-full" ref="main">
		<div class="mt-6 grid grid-cols-12">
			<arrow-left-icon
				class="self-end col-span-1 cursor-pointer"
				@click="$router.back()"
			/>
			<span class="flex justify-center col-span-11 font-bold">
				<!-- {{ news.title }} -->
			</span>
		</div>

		<v-card class="mx-auto" max-width="900">
			<v-img
				class="align-end text-white"
				height="200"
				:src="news.urlToImage"
				cover
			>
				<v-card-title>{{ news.title }}</v-card-title>
			</v-img>

			<v-card-subtitle class="pt-4"> {{ news.author }} </v-card-subtitle>

			<v-card-text>
				<div>{{ news.publishedAt }}</div>

				<div>{{ news.description }}</div>
			</v-card-text>

			<v-card-actions>
				<v-btn color="orange"> Ver Mais </v-btn>
			</v-card-actions>
		</v-card>
	</main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import { newsStore } from '../store/NewsStore'

export default defineComponent({
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	components: {},
	setup(props) {
		const news = ref<any>({})
		const store = newsStore()

		onMounted(() => {
			news.value = store.getNewsSelected
		})

		return {
			news
		}
	}
})
</script>
