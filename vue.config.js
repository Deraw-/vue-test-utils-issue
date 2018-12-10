module.exports = {
	runtimeCompiler: false,
	productionSourceMap: false,
	parallel: true,
	configureWebpack:{
		optimization: {
			minimize: true,
			splitChunks: {
				minSize: 10000,
				maxSize: 200000,
				chunks: 'all'
			}
		}
	},
	chainWebpack: config => {
		config
			.plugin('VuetifyLoaderPlugin');
	},
	transpileDependencies: ['vuex-persist']
};

