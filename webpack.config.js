module.exports = {
	entry: "./js/app.jsx",
	output: {
		path: './build',
		filename: 'app.js'
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/, 
            exclude: /(node_modules|bower_components)/,
			loader: 'babel'
		}
		]
	},
	resolve: {
		extenstions: ['.jsx']
	}
};