import React from "react";
// import CoverImage from "./CoverImage";
// import ImageBg from "./ImageBg";
import Lottie from "lottie-react";
import coder from '../../assets/coder.json'

const RightBanner = () => {
	return (
		<div className="w-full flex justify-center items-center relative order-1 md:order-2">
			<Lottie className="w-full" animationData={coder} loop={true} />
		</div>
	);
};

export default RightBanner;
