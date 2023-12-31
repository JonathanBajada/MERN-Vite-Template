module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
	   // browser: true,
	   es6: true,
	   node: true,
	},
	extends: [
	   'standard-with-typescript',
	   'plugin:@typescript-eslint/recommended',
	   'plugin:prettier/recommended', // This line
	   'plugin:@typescript-eslint/eslint-recommended',
	   'plugin:@typescript-eslint/recommended-requiring-type-checking',
	   'prettier',
	],
	overrides: [
	   {
		  env: {
			 node: true,
		  },
		  files: ['.eslintrc.{js,cjs}'],
		  parserOptions: {
			 sourceType: 'script',
		  },
	   },
	],
	parserOptions: {
	   ecmaVersion: 'latest',
	   sourceType: 'module',
	   project: './tsconfig.json',
	},
	plugins: ['prettier', '@typescript-eslint'],
	rules: {
	   'prettier/prettier': 'error',
	   '@typescript-eslint/no-var-requires': 'off',
	   'deprecation/deprecation': 'off',
	   "@typescript-eslint/no-unsafe-call": "off",
	   "@typescript-eslint/no-unsafe-member-access": "off",
	   "@typescript-eslint/no-unsafe-assignment": "off",
	   "@typescript-eslint/strict-boolean-expressions": "off",
	   "@typescript-eslint/prefer-nullish-coalescing": "off"
	},
 }