<template>
	<Header class="shadow-lg py-1 flex flex-col items-center">
		<div class="flex justify-between w-full px-4">
			<img
				:src="logo"
				alt=""
				class="w-16 cursor-pointer"
				@click="$router.push('/')"
			/>
			<div class="flex justify-between gap-2">
				<v-btn icon>
					<v-menu min-width="200px" rounded>
						<template v-slot:activator="{ props }">
							<v-btn icon v-bind="props">
								<v-avatar>
									<v-img
										src="https://avatars.githubusercontent.com/u/33555544?v=4"
										alt="BioJJ"
									></v-img>
								</v-avatar>
							</v-btn>
						</template>
						<v-card>
							<v-card-text>
								<div class="mx-auto text-center">
									<v-avatar color="brown">
										<v-img
											src="https://avatars.githubusercontent.com/u/33555544?v=4"
											alt="John"
										></v-img>
									</v-avatar>
									<h3>{{ user.fullName }}</h3>
									<p class="text-caption mt-1">
										{{ user.email }}
									</p>
									<v-divider class="my-3"></v-divider>
									<v-btn
										rounded
										variant="text"
										@click="openLink('https://github.com/BioJJ')"
									>
										GitHub
									</v-btn>
									<v-divider class="my-3"></v-divider>
									<v-btn
										rounded
										variant="text"
										@click="
											openLink('https://www.linkedin.com/in/jefferson-coelho/')
										"
									>
										Linkend
									</v-btn>
								</div>
							</v-card-text>
						</v-card>
					</v-menu>
				</v-btn>
			</div>
		</div>
		<search-bar class="w-fit md:mx-auto mt-2 mx-4" />
	</Header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SearchBar from '../../components/SearchBar.vue'
import logo from '../../assets/logo-news.jpg'

export default defineComponent({
	components: {
		SearchBar
	},
	setup() {
		const user = ref({
			initials: 'BioJJ',
			fullName: 'Jefferson Coelho',
			email: 'bio.jeffcoelho@gmail.com'
		})

		const openLink = (url: string) => {
			window.open(url, '_blank')
		}

		return {
			logo,
			user,
			openLink
		}
	}
})
</script>
