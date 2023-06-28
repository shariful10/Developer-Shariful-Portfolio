import React from "react";
import { bannerImg } from "../../assets/img";

const CoverImage = () => {
	return (
		<img
			className="w-[300px] h-[400px] lg:w-[580px] lg:h-[700px] z-10"
			src={bannerImg}
			alt="bannerImg"
		/>
	);
};

export default CoverImage;
