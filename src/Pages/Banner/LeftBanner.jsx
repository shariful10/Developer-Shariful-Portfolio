import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Paragraph from "./Paragraph";
import MyBtn from "../../Shared/MyBtn/MyBtn";

const LeftBanner = () => {
	const [text] = useTypewriter({
		words: ["Frontend Developer.", "MERN Stack Developer.", "Specialize in React.js."],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 20,
		delaySpeed: 2000,
	});

	return (
		<div className="order-2 md:order-1 text-center md:text-left">
			<div className="flex flex-col gap-3 mt-5 md:mt-0">
				<h4 className="text-[16px] md:text-lg font-normal font-Roboto">
					WELCOME TO MY WORLD
				</h4>
				<h1 className="text-4xl md:text-6xl font-bold font-Montserrat mt-5">
					Hi, I'm <span className="text-dribble">Shariful Islam</span>
				</h1>
				<h2 className="text-[26px] md:text-4xl font-bold">
					a <span>{text}</span>
					<Cursor
						cursorBlinking="false"
						cursorStyle="|"
						cursorColor="#ea4c89"
					/>
				</h2>
				<Paragraph />
			</div>
			<MyBtn />
		</div>
	);
};

export default LeftBanner;
