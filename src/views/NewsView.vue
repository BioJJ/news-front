<template>
	<main class="mx-4 md:mx-auto flex-1 md:w-full" ref="main">
		<div class="mt-6 grid grid-cols-12">
			<arrow-left-icon
				class="self-end col-span-1 cursor-pointer"
				@click="$router.back()"
			/>
			<span class="flex justify-center col-span-11 font-bold">
				{{ exam.title }}
			</span>
		</div>
		<div class="pt-4">
			<div
				class="border-2 rounded-full flex items-center w-fit py-px px-2"
				:class="{
					'border-green-600': exam.finishin,
					'border-gray-400': !exam.finishin
				}"
			>
				<currency-usd-icon size="20" fill-color="#ffba2c" />
				<span>
					{{ exam.beetcoins }}
				</span>
			</div>
		</div>
		<div class="flex justify-between text-xs py-4">
			<span class="border-2 rounded-full p-px">
				BeeFree - Orgulho LGBTQIA+
			</span>
			<span class="border-2 rounded-full p-px"> Conheça mais do Beedoo </span>
		</div>

		<hr class="border" />
	</main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'
import CurrencyUsdIcon from 'vue-material-design-icons/CurrencyUsd.vue'
import HelpIcon from 'vue-material-design-icons/Help.vue'
import AlphaXIcon from 'vue-material-design-icons/AlphaX.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'

export default defineComponent({
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	components: {
		ArrowLeftIcon,
		CurrencyUsdIcon,
		HelpIcon,
		AlphaXIcon,
		CheckIcon
	},
	setup(props) {
		const exam = ref<any>({
			id: 1,
			title: 'Noticia 1',
			author: 'Pandora',
			finishin: null,
			beetcoins: 0
		})
		const answers = ref<Record<number, number>>({})
		const totalBeetcoins = ref(0)

		return {
			exam,
			answers,
			totalBeetcoins
		}
	}
})
</script>
