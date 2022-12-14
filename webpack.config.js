/**
 * @Author: hqwx.com
 * @Date: 2022-08-06 00:11:39
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 17:22:52
 * @smile: 😃😃
 */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: [
			'.jsx', '.js',
			'.ts', '.tsx',
			'.json', '.scss',
		],
		alias: {
			// 添加目录便于引用
			'@': path.resolve(__dirname, 'src'),
			// '@': path.resolve(__dirname, '../utils'),
		},
	},
	devServer: {
		open: true,
		host: 'localhost',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),

		// 		// Add your plugins here
		// 		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: [ '/node_modules/' ],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [ {
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader",
					options: {
						modules: true,
						// includePaths: [ "absolute/path/a", "absolute/path/b" ]
					}
				} ],
			},
			{
				test: /\.css$/i,
				use: [ stylesHandler, 'css-loader', 'postcss-loader' ],
				// use: [ stylesHandler, 'css-loader' ],
				exclude: [
					path.resolve(__dirname, 'src/components'),
				]
			},
			{
				test: /\.css$/i,
				use: [
					stylesHandler,
					{
						loader: 'css-loader',
						options: {
							modules: true,
						}
					} ],
				include: [
					path.resolve(__dirname, 'src/components'),
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
			{
				test: /\.(mp3)$/i,
				type: 'asset',
			},

			// 			// Add your rules for custom modules here
			// 			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	// 	resolve: {
	// 		extensions: [ '.tsx', '.ts', '.jsx', '.js', '...' ],
	// 	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';

		// config.plugins.push(new MiniCssExtractPlugin());


		// config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

	} else {
		config.mode = 'development';
	}
	return config;
};
