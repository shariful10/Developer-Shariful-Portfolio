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
				Josefin: ["Josefin Sans", "sans-serif"],
			},
			backgroundImage: {
				bodyBg: "url('./src/assets/bg-texture.png')",
			},
		},
	},
	plugins: [],
};
