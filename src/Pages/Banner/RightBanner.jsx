import React from "react";
import CoverImage from "./CoverImage";
import ImageBg from "./ImageBg";

const RightBanner = () => {
	return (
		<div className="w-full flex justify-center items-center relative order-1 md:order-2">
			<CoverImage />
			<ImageBg />
		</div>
	);
};

export default RightBanner;
