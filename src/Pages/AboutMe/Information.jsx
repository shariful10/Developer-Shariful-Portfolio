import React from "react";

const Information = () => {
	return (
		<div className="text-center md:text-left">
			<h2 data-aos="fade-left" className="text-5xl font-LobsterTwo">
				About Me
			</h2>
			<div className="my-5 w-3/4 md:w-1/4 mx-auto md:mx-0">
				<hr />
			</div>
			<p className="font-Roboto my-10">
				Hi, I am Md. Shariful Islam. I am a passionate web developer with expertise in
				front-end development, specializing in HTML, CSS, JavaScript and React.js. I strive
				to create visually appealing and user-friendly websites that work seamlessly across
				devices. I stay updated with the latest industry trends and enjoy collaborating with
				clients to deliver modern and innovative solutions.
			</p>
			<div className="mt-5">
				<a
					href="https://drive.google.com/file/d/1E85gR-M3-x99W5HPIXF08uXTJtxXbA1n/view?usp=sharing"
					className="myBtn"
					target="_blank">
					View Resume
				</a>
			</div>
		</div>
	);
};

export default Information;
