import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
	return (
		<>
			<section
				data-aos="zoom-out"
				id="home"
				className="grid md:grid-cols-2 justify-between items-center gap-6 mt-[50px]">
				<LeftBanner />
				<RightBanner />
			</section>
			<p id="skills" className="text-transparent mb-[80px]">
				hidden
			</p>
		</>
	);
};

export default Banner;
