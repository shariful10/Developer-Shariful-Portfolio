import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
	return (
		<section
			id="home"
			className="grid md:grid-cols-2 justify-between items-center gap-6 mb-[80px]">
			<LeftBanner />
			<RightBanner />
		</section>
	);
};

export default Banner;
