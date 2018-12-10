import { shallowMount, createLocalVue } from '@vue/test-utils';
// import UploadTable from '@/components/UploadTable.vue';

import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('UploadTable.vue', () => {
	it('renders correctly', () => {
		// const wrapper = shallowMount(UploadTable, {
		// 	localVue,
		// 	mocks: {
		// 		$t: () => ''
		// 	},
		// 	propsData: {
		// 		files: [
		// 			{
		// 				name: 'file1.csv',
		// 				created: new Date(),
		// 				statusUpdated: new Date(),
		// 				lines: 2,
		// 				status: 'uploaded'
		// 			},
		// 			{
		// 				name: 'file2.csv',
		// 				created: new Date(),
		// 				statusUpdated: new Date(),
		// 				lines: 2,
		// 				status: 'loaded'
		// 			}
		// 		]
		// 	}
		// });

		// expect(wrapper.html()).toMatchSnapshot();
	});
});
