declare module 'vue-config';
declare module 'raven-js/plugins/vue';

declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
