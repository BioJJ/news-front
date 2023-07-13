<template>
	<div>
		<div
			class="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] p-3 flex justify-between h-40"
			@click="setNews(news)"
		>
			<span class="self-start font-bold">
				{{ news.author }}
			</span>
			<span class="self-center font-regular">
				{{ news.title }}
			</span>

			<chevron-right-icon size="48" class="self-center" fill-color="#A3A3A3" />
		</div>
	</div>
</template>

<script lang="ts">
import { Article } from '@/models/Article'
import { defineComponent } from 'vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import router from '../router'
import { newsStore } from '../store/NewsStore'

const store = newsStore()
export default defineComponent({
	components: {
		ChevronRightIcon
	},
	props: {
		news: {
			type: Object as () => any,
			required: true
		}
	},
	methods: {
		setNews(news: Article[]) {
			console.log('artigo atual', JSON.stringify(news))

			store.fetchNewsSelected(news)
			router.push('/news/')
		}
	}
})
</script>
