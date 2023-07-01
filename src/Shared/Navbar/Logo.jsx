import React from "react";
import logo from "../../assets/nav-logo.json";
import Lottie from "lottie-react";

const Logo = () => {
	return (
		<>
			<a href="#home">
				<Lottie className="w-14 h-14 md:w-24 md:h-24" animationData={logo} loop={true} />
			</a>
		</>
	);
};

export default Logo;
