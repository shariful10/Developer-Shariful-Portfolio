import React from "react";
import logo from "../../assets/nav-logo.json";
import Lottie from "lottie-react";

const Logo = () => {
	return (
		<>
			<a href="#home">
				{/* <h2 className="text-4xl font-LobsterTwo font-bold text-navy w-16 h-16 flex justify-center items-center bg-rose-600 rounded-tr-3xl rounded-bl-3xl p-2">
					D<span className="text-primary">S</span>
				</h2> */}
				<Lottie className="w-14 h-14 md:w-24 md:h-24" animationData={logo} loop={true} />
			</a>
		</>
	);
};

export default Logo;
