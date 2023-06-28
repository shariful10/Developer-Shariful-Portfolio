/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				navy: "#2c2c6c",
				dribble: "#ea4c89",
				primary: "#4db5ff",
				darkblue: "#1f1f38",
			},
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
				LobsterTwo: ["Lobster Two", "cursive"],
				Montserrat: ["Montserrat", "sans-serif"],
			},
			backgroundImage: {
				bodyBg: "url('./src/assets/bg-texture.png')",
			},
			boxShadow: {
				shadowOne: "10px 10px 19px #e11d473b, -10px -10px 19px #4db5ff3c",
			},
			translate: {
				5: "5px",
			},
			stroke: {
				green: "#04fc43",
			},
			rotate: {
				270: "270deg",
			},
		},
	},
	plugins: [],
};
