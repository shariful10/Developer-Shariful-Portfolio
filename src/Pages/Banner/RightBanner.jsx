import React from "react";
import Lottie from "lottie-react";
import cover from '../../assets/Cover.json'

const RightBanner = () => {
	return (
		<div className="w-full flex justify-center items-center relative order-1 md:order-2">
			<Lottie className="w-[80%]" animationData={cover} loop={true} />
		</div>
	);
};

export default RightBanner;
