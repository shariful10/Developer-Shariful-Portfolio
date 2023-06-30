import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
	return (
		<>
			<section
				id="home"
				className="grid md:grid-cols-2 justify-between items-center gap-6 mt-[80px] bg-[#00000000]">
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
