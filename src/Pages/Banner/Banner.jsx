import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { coverImg } from "../../assets/img";

const Banner = () => {
	const [text] = useTypewriter({
		words: ["Frontend Developer.", "MERN Stack Developer.", "Specialize in React.js."],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 20,
		delaySpeed: 2000,
	});

	return (
		<section id="home" className="pt-10 pb-20 grid md:grid-cols-2 justify-between items-center gap-6">
			<div className="order-2 md:order-1">
				<div className="flex flex-col gap-3 mt-5 md:mt-0">
					<h4 className="text-[16px] md:text-lg font-normal font-Roboto">WELCOME TO MY WORLD</h4>
					<h1 className="text-4xl md:text-6xl font-bold font-Josefin mt-5">
						Hi, I'm <span className="text-rose-600">Shariful Islam</span>
					</h1>
					<h2 className="text-[26px] md:text-4xl font-bold">
						a <span>{text}</span>
						<Cursor
							cursorBlinking="false"
							cursorStyle="|"
							cursorColor="rgb(225 29 72 / var(--tw-text-opacity))"
						/>
					</h2>
					<p>
						I am a passionate web developer with expertise in front-end development,
						specializing in HTML, CSS, and JavaScript. I strive to create visually
						appealing and user-friendly websites that work seamlessly across devices. I
						stay updated with the latest industry trends and enjoy collaborating with
						clients to deliver modern and innovative solutions.
					</p>
				</div>
			</div>
			<div className="order-1 md:order-2">
				<img className="mx-auto" src={coverImg} alt="" />
			</div>
		</section>
	);
};

export default Banner;
