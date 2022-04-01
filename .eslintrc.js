module.exports = {
	env: {
		'es2021': true,
		'node': true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: [
		'@typescript-eslint',
		'eslint-plugin-node'
	],
	rules: {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'prefer-const': 'off',
		'keyword-spacing': [
			'error',
			{
				before: false, after: false,
				overrides: {
					'import': { before: true, after: true },
					'export': { after: true },
					'from': { before: true, after: true },
					'const': { before: true, after: true },
					'return': { before: true, after: true },
					'throw': { before: true, after: true },
					'as': { before: true, after: true },
					'let': { before: true, after: true },
					'new': { before: true, after: true },
					'await': { before: true, after: true }
				}
			}
		],
		'object-curly-spacing': [
			'error',
			'always',
			{ objectsInObjects: true }
		],
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'never',
				'named': 'always',
				'asyncArrow': 'always'
			}
		],
		'space-before-blocks': [
			'error',
			{
				functions: 'always',
				keywords: 'never',
				classes: 'never'
			}
		],
		'comma-spacing': [
			'error',
			{ 'before': false, 'after': true }
		],
		'comma-dangle': [
			'error',
			'never'
		],
		'key-spacing': [
			'error',
			{ 'beforeColon': false, 'afterColon': true }
		],
		'brace-style': [
			'error'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': [
			'error',
			{ 'int32Hint': false }
		],
		'no-multi-spaces': 'error',
		'arrow-spacing': 'error',
		'func-call-spacing': [
			'error',
			'never'
		],
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'eol-last': [
			'error',
			'always'
		],
		'spaced-comment': [
			'error',
			'always',
			{ 'block': { 'balanced': true } }
		]
	}
}
