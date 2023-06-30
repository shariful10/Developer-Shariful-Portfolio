import React from "react";
import Lottie from "lottie-react";
import coder from '../../assets/banner.json'

const RightBanner = () => {
	return (
		<div className="w-full flex justify-center items-center relative order-1 md:order-2">
			<Lottie className="w-full" animationData={coder} loop={true} />
		</div>
	);
};

export default RightBanner;
