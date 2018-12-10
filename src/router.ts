import Vue from 'vue';
import Router from 'vue-router';

// Directly import Home for faster rendering of Home page
import Home from '@/views/Home.vue';

Vue.use(Router);

// See https://router.vuejs.org/fr/essentials/navigation.html for help
export default new Router({
	mode: 'history', // Use the History API, and remove the hash from the URL
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '*', // Everything that doesn't match something
			name: 'notFound',
			component: () => import(/* webpackChunkName: "not-found" */ './views/NotFound.vue')
		}
	],
	// Native-like scroll behavior
	scrollBehavior(to, from, savedPosition) {
		// if there is an hash, this is an anchor, so scroll to it
		if (to.hash) {
			return {
				selector: to.hash
			};
		} else {
			// else simulate browser behavior by returning to the previous position, or fallback to top
			if (savedPosition) {
				return savedPosition;
			} else {
				return { x: 0, y: 0 };
			}
		}
	}
});
