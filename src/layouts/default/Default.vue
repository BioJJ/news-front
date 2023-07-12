<template>
	<v-app>
		<DefaultBar />
		<DefaultView />
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'

export default defineComponent({
	components: {
		DefaultBar,
		DefaultView
	}
})
</script>
