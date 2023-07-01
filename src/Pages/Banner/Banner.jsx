import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
	return (
		<>
			<div id="home" className="text-transparent mb-[100px]">
				hidden
			</div>
			<section
				data-aos="zoom-out"
				className="grid md:grid-cols-2 justify-between items-center gap-6">
				<LeftBanner />
				<RightBanner />
			</section>
			<p id="about" className="text-transparent mb-[50px]">
				hidden
			</p>
		</>
	);
};

export default Banner;
