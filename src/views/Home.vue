<template>
	<v-layout
		class="pa-5"
		justify-center
		align-start
	>
		<div>
			<img
				alt="Vue logo"
				src="../assets/logo.png"
				class="d-block mx-auto"
			>
			<h1 class="font-weight-medium px-3 main-title display-3 blue-grey--text text--darken-2">Vue Dash</h1>
			<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
		</div>
	</v-layout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

	export default Vue.extend({
		name: 'Home',
		components: {
			HelloWorld,
		}
	});
</script>

<style lang="scss" scoped>
	// Scoped style, only applies to the component
	.main-title {
		text-align: center;
	}
</style>
