module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended",
		"prettier"
	],
	parserOptions: {
		ecmaVersion: 13,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: [],
	rules: {
		'no-undef': "off",
		'vue/multi-word-component-names': 0,
		'no-var': "error",
		semi: ["error", "never"],
		"@typescript-eslint/no-explicit-any": "off"
	}
}