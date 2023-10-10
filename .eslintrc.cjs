module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'plugin:@cspell/recommended',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh','prettier'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'react/prop-types': 'warn',
		semi: ['error', 'always'],
		eqeqeq: 'warn',
		camelcase: 'error',
		'no-console': 'warn',
		'prettier/prettier': 'error',
	},
};
