import React from "react";
import Lottie from "lottie-react";
import about from "../../assets/About-me.json";
import Information from "./Information";

const AboutMe = () => {
	return (
		<>
			<section className="mb-[30px] grid md:grid-cols-2 gap-6 justify-center items-center">
				<div className="">
					<Lottie className="md:w-[80%]" animationData={about} loop={true} />
				</div>
				<Information />
			</section>
			<p id="skills" className="text-transparent mb-[80px]">
				hidden
			</p>
		</>
	);
};

export default AboutMe;
