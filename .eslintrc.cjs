module.exports = {
	env: { browser: true, es2023: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		// "react/prop-types": "off",
		// "react/no-unescaped-entities": 0,
		// "react/react-in-jsx-scope": "off",
		"react-refresh/only-export-components": "warn",
	},
};
