<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>
			For guide and recipes,<br>
			check out the
			<a
				href="https://vuejs.org"
				target="_blank"
				rel="noopener"
			>vue.js documentation</a>.
		</p>

		<!-- Easy way, static -->
		<h3>Essential Links</h3>
		<ul>
			<li>
				<a
					href="https://vuejs.org"
					target="_blank"
					rel="noopener"
				>Core Docs</a>
			</li>
			<li>
				<a
					href="https://forum.vuejs.org"
					target="_blank"
					rel="noopener"
				>Forum</a>
			</li>
			<li>
				<a
					href="https://chat.vuejs.org"
					target="_blank"
					rel="noopener"
				>Community Chat</a>
			</li>
			<li>
				<a
					href="https://twitter.com/vuejs"
					target="_blank"
					rel="noopener"
				>Twitter</a>
			</li>
			<li>
				<a
					href="https://news.vuejs.org"
					target="_blank"
					rel="noopener"
				>News</a>
			</li>
		</ul>

		<!-- Let's make it dynamic -->
		<h3>Ecosystem</h3>
		<ul v-if="items">
			<li
				v-for="link in items"
				:key="link.id"
			>
				<a
					:href="link.url"
					target="_blank"
					rel="noopener"
				>{{ link.title }}</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'HelloWorld',
		props: {
			msg: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				items: [
					{
						id: 0,
						title: 'vue-router',
						url: 'https://router.vuejs.org'
					},
					{
						id: 1,
						title: 'vuex',
						url: 'https://vuex.vuejs.org'
					},
					{
						id: 2,
						title: 'vue-devtools',
						url: 'https://github.com/vuejs/vue-devtools#vue-devtools'
					},
					{
						id: 3,
						title: 'awesome-vue',
						url: 'https://github.com/vuejs/awesome-vue'
					}
				]
			};
		},
	});
</script>
