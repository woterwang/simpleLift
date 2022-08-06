/**
 * @Author: hqwx.com
 * @Date: 2022-08-05 21:51:42
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 01:32:26
 * @😍: 😃😃
 */
module.exports = {
	"root": true,
	"env": {
		// "browser": true,
		// "es2021": true,
		"es6": true,
		// "node": true,
	},
	"parser": "@typescript-eslint/parser",
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	plugin: [ "@typescript-eslint" ],
	// "extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		// "linebreak-style": [ "error", "windows" ],
	}
}
